import { Request, Response } from "express";

import User from "@/models/system/User";
import { createJWTToken, validatePasswordHash } from "@/util/hashMethods";

export default class authorizationRoute {
	async index(req: Request, res: Response): Promise<void> {
		if (
			!req.get("Referrer")?.includes("droidontime") &&
			!req.is("application/json")
		) {
			return res
				.status(403)
				.json({
					success: false,
					error: "No information provided."
				})
				.end();
		}

		if (req.loggedUser && req.signedCookies.BearerToken.split(" ")[1])
			return res.status(202).redirect("/admin");

		if (!req.body?.user?.username || !req.body?.user?.password) {
			return res
				.status(403)
				.json({
					success: false,
					error: "No information provided."
				})
				.end();
		}

		if (
			typeof req.body.user.username !== "string" ||
			typeof req.body.user.password !== "string"
		) {
			return res
				.status(403)
				.json({
					success: false,
					error: "Unknown error."
				})
				.end();
		}

		const userExists = await User.findOne({
			username: req.body.user.username
		});

		if (!userExists) {
			return res
				.status(401)
				.json({
					success: false,
					error: "Username or password is incorrect. Please try again."
				})
				.end();
		}

		const validatePassword = await validatePasswordHash(
			req.body.user.password,
			userExists.password
		);

		if (!validatePassword) {
			return res
				.status(401)
				.json({
					success: false,
					error: "Username or password is incorrect. Please try again."
				})
				.end();
		}

		const JWTObject = {
				username: userExists.username
			},
			JWTSignedToken = "Bearer " + (await createJWTToken(JWTObject)),
			token = JWTSignedToken.split(" ")[1];

		res.cookie("BearerToken", JWTSignedToken, {
			expires: new Date(Date.now() + 3600000),
			signed: true,
			sameSite: true,
			secure: true,
			httpOnly: true
		});

		await User.updateOne({ username: userExists.username }, { token });

		return res
			.status(200)
			.json({
				success: true,
				message: "You will be redirected in 3 seconds to admin panel."
			})
			.end();
	}
}

export const authorizationRouter = new authorizationRoute();
