import { Request, Response } from "express";

import User from "@/models/system/User";
import { createHash } from "@/util/hashMethods";

export default class createUserRoute {
	async index(req: Request, res: Response): Promise<void> {
		if (
			req.query.token !== process.env.SECRET_TOKEN ||
			!req.query.username ||
			!req.query.password ||
			!req.query.role
		)
			return res.status(404).end();

		const hashedPass = await createHash(req.query.password as string);

		await User.create({
			username: req.query.username,
			password: hashedPass,
			role: req.query.role
		});

		return res.status(200).json({ success: true }).end();
	}
}

export const createUserRouter = new createUserRoute();
