import { Request, Response } from "express";

export default class pingRoute {
	async index(req: Request, res: Response): Promise<void> {
		return res.json({ success: true, message: "OK" }).end();
	}
}

export const pingRouter = new pingRoute();
