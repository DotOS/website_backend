import crypto from "crypto";
import { readFileSync } from "fs";
import { sign } from "jsonwebtoken";

export const createHash = async (password: string): Promise<string> => {
		const salt = crypto.randomBytes(12).toString("hex"),
			derivedKey = await crypto.scryptSync(password, salt, 64);
		return salt + ":" + derivedKey.toString("hex");
	},
	validatePasswordHash = async (
		password: string,
		hash: string
	): Promise<boolean> => {
		const [salt, key] = hash.split(":"),
			keyBuffer = Buffer.from(key, "hex"),
			derivedKey = await crypto.scryptSync(password, salt, 64);
		return crypto.timingSafeEqual(keyBuffer, derivedKey);
	},
	createJWTToken = async (data: Record<string, unknown>): Promise<string> => {
		const privateKey = readFileSync("keys/private.key", "utf8"),
			signedToken = await sign(data, privateKey, {
				algorithm: "RS512",
				expiresIn: "1h",
				issuer: "DroidOnTime",
				subject: "Admin Panel",
				audience:
					process.env.NODE_ENV !== "production"
						? "https://dev.droidontime.com"
						: "https://droidontime.com"
			});
		return signedToken;
	};
