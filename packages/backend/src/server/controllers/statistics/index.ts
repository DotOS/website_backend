import { Router } from "express";

import Controller from "@/interfaces/controller";
import { updateRouter } from "@/routes/api/statistics/update";
import { statsIndexRouter } from "@/routes/website/stats";

export default class StatsController implements Controller {
	name = "Stats";
	path = "/";
	subdomain = "stats";
	router = Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes(): void {
		this.router
			.get("/", statsIndexRouter.index)
			.post("/dotos_api", updateRouter.oldMethod)
			.post("/update", updateRouter.oldMethod);
	}
}
