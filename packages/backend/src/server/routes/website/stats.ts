import { Request, Response } from "express";

export default class statsIndexRoute {
	async index(req: Request, res: Response): Promise<void> {
		//* No stats subdomain anymore.
		return res
			.status(301)
			.redirect(
				process.env.NODE_ENV !== "production"
					? "https://dev.droidontime.com/stats"
					: "https://www.droidontime.com/stats"
			);
	}
}

export const statsIndexRouter = new statsIndexRoute();
