import { NextFunction, Request, Response } from "express";

import { logger } from "../config";

const log = logger.extend("middleware:log");

export const loggerMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if (process.env.NODE_ENV === "production") return next();
	res.on("finish", () => {
		const formattedURL = new URL(
			req.protocol + "://" + req.get("host") + req.originalUrl
		);

		log(
			"Request [%o]: %o statusCode/%o HTTP/%o UserAgent/%o",
			req.method,
			formattedURL.href,
			res.statusCode,
			req.httpVersion,
			req.get("User-Agent")
		);
	});

	next();
};
