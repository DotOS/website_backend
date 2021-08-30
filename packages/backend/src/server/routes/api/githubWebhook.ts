import { createHmac } from "crypto";
import { Request, Response } from "express";

import { cacheFiles } from "@/util/cacheFiles";

export default class githubWebhookRoute {
	async index(req: Request, res: Response): Promise<void> {
		if (!req.body || Object.keys(req.body).length === 0)
			return res.status(403).json({ success: false }).end();

		const sig = `sha1=${createHmac(
			"sha1",
			process.env.GITHUB_WEBHOOK_SECRET as string
		)
			.update(JSON.stringify(req.body))
			.digest("hex")}`;

		//* Verify signature
		if (req.get("X-Hub-Signature") !== sig)
			return res.status(403).json({ success: false }).end();

		//* Verify event if it is push commit
		if (!req.body.pusher && !req.body.commits && !req.body.ref)
			return res.status(403).json({ success: false }).end();

		//* Send 200 HTTP status code for GitHub so they will know that it has been delivered.
		res.status(200).end();

		//* Cache all files.
		cacheFiles();
	}
}

export const githubWebhookRouter = new githubWebhookRoute();
