import { Router } from "express";

import Controller from "@/interfaces/controller";
import { JWTMiddleware } from "@/middlewares/JWTMiddleware";
import { authorizationRouter } from "@/routes/api/admin/authorization";
import { createUserRouter } from "@/routes/api/admin/createUser";
import { editRouter } from "@/routes/api/admin/edit";
import { downloadRouter } from "@/routes/api/download";
import { githubWebhookRouter } from "@/routes/api/githubWebhook";
import { otaDeviceRouter } from "@/routes/api/ota/device";
import { pingRouter } from "@/routes/api/ping";
import { updateRouter } from "@/routes/api/statistics/update";
import { autocompleteDataRouter } from "@/routes/api/web/autocompleteData";
import { fetchStatsRouter } from "@/routes/api/web/fetchStats";
import { getInfoRouter } from "@/routes/api/web/getInfo";

export default class APIController implements Controller {
	name = "API";
	path = "/api";
	subdomain = null;
	router = Router();

	constructor() {
		this.initializeRoutes();
	}

	initializeRoutes(): void {
		this.router
			.post("/webhook", githubWebhookRouter.index)
			//.post("/authorization", authorizationRouter.index)
			//.post("/admin/edit", JWTMiddleware, editRouter.index)
			.post("/stats/dotos_api", updateRouter.oldMethod)
			.post("/stats/update", updateRouter.oldMethod)
			.post("/stats/device", updateRouter.newMethod)
			.get("/ping", pingRouter.index)
			//.get("/admin/createUser", createUserRouter.index)
			.get("/fetchStats", fetchStatsRouter.index)
			.get("/autocompleteData", autocompleteDataRouter.index)
			.get("/website/:type", getInfoRouter.index)
			.get("/ota/:codename", otaDeviceRouter.deviceInfo)
			.get("/ota/:codename/releases/:releaseType?", otaDeviceRouter.releases)
			.get("/ota/:codename/maintainer", otaDeviceRouter.maintainerInfo)
			.get("/ota/:codename/changelog", otaDeviceRouter.deviceChangelog)
			.get("/download/:codename/:version/:type", downloadRouter.index);
	}
}
