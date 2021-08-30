import { NextFunction, Request, Response } from "express";
import { readFileSync } from "fs";
import { verify } from "jsonwebtoken";

import User from "@/models/system/User";

export const JWTMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	if (
		!req.signedCookies.BearerToken ||
		!req.signedCookies.BearerToken.includes("Bearer")
	) {
		return res
			.status(403)
			.send({
				success: false,
				error: "403 Forbidden"
			})
			.end();
	}

	const tokenCookie = req.signedCookies.BearerToken?.split(" ")[1] as string,
		publicKey = readFileSync("keys/public.key", "utf8");

	verify(
		tokenCookie,
		publicKey,
		{
			issuer: "DroidOnTime",
			subject: "Admin Panel",
			audience:
				process.env.NODE_ENV !== "production"
					? "https://dev.droidontime.com"
					: "https://droidontime.com",
			algorithms: ["RS512"]
		},
		async (err, user) => {
			const checkToken = await User.findOne({
				token: tokenCookie
			});
			console.log(err);
			if (err || !checkToken) {
				return res.status(403).send({
					success: false,
					error: "403 Forbidden"
				});
			}

			req.loggedUser = user as JWTToken;
			next();
		}
	);
};
