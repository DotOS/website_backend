import cookieParser from "cookie-parser";
import cors from "cors";
import debug from "debug";
import { config } from "dotenv";
import express, { Application, ErrorRequestHandler, json } from "express";
import { hidePoweredBy } from "helmet";
import responseTime from "response-time";
import vhost from "vhost";

import Controller from "@/interfaces/controller";
import { loggerMiddleware } from "@/middlewares/loggerMiddleware";
import { cacheFiles } from "@/util/cacheFiles";

import { logger } from "./config";
import createDatabaseConnection from "./database";

export default class App {
	express: Application;
	logger: debug.Debugger;

	constructor(controllers: Controller[]) {
		this.logger = logger.extend("WebServer");
		this.express = express();

		debug.enable("dotOS:*");

		this.loadEnvironment();
		cacheFiles();
		this.connectToDatabase();
		this.setOptions();
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	private initializeMiddlewares(): void {
		this.logger("Initializing middlewares");
		//* Provide helmet & json middlewares
		this.express.use(
			json(),
			hidePoweredBy(),
			cors(),
			responseTime(),
			cookieParser(process.env.SECRET_COOKIE),
			loggerMiddleware
		);
	}

	private setOptions(): void {
		this.logger("Setting Express options");
		this.express.set("trust proxy", true).set("json escape", true);
	}

	private initializeControllers(controllers: Controller[]) {
		controllers.forEach(controller => {
			this.logger.extend("routes")(
				"Initializing routes for %o",
				controller.name
			);
			if (controller.subdomain) {
				this.express.use(
					vhost(`${controller.subdomain}.droidontime.com`, controller.router)
				);
			} else {
				this.express.use(controller.path, controller.router).use(((
					err,
					req,
					res,
					next
				) => {
					if (err.code !== "EBADCSRFTOKEN") return next(err);
					return res.status(403).json({
						success: false,
						error: { message: "CSRF Token is invalid." }
					});
				}) as ErrorRequestHandler);
			}
		});
	}

	private loadEnvironment(): void {
		this.logger.extend("env")("Loading environment");
		config({ path: "./.env" });

		if (
			!process.env.SECRET_TOKEN ||
			!process.env.SECRET_COOKIE ||
			!process.env.MONGO_URI ||
			!process.env.NODE_ENV ||
			!process.env.GITHUB_WEBHOOK_SECRET
		) {
			this.logger.extend("env")(
				"Missing environment variables. Please check your .env file."
			);
			process.exit(1);
		}
	}

	private async connectToDatabase(): Promise<void> {
		await createDatabaseConnection();
	}

	listen(port: number): void {
		this.express.listen(port, "127.0.0.1", () => {
			this.logger("Listening WebServer on port %o", port);
		});
	}
}
