import { Request, Response } from "express";

import announcements from "@/models/system/announcements";
import User from "@/models/system/User";
import { getAnnouncement } from "@/util/getAnnouncement";

export default class editRoute {
	async index(req: Request, res: Response): Promise<void> {
		if (!req.signedCookies.BearerToken?.split(" ")[1] || !req.loggedUser)
			return res.status(403).json({ success: false }).end();

		const user = await User.findOne({
			token: req.signedCookies.BearerToken?.split(" ")[1]
		});

		if (!user || user.role !== ("owner" || "administrator"))
			return res.status(403).json({ success: false }).end();

		if (
			!req.body.announcement ||
			!req.body.announcement.showAnnouncement ||
			!req.body.announcement.bannerType ||
			!req.body.announcement.badgeMsg ||
			!req.body.announcement.announcementMessage ||
			!req.body.announcement.redirectLink
		) {
			return res
				.status(403)
				.json({
					success: false,
					error: "Didn't get necessary stuff. Weird right?"
				})
				.end();
		}

		const announcement = {
				show: req.body.announcement.showAnnouncement,
				bannerType: req.body.announcement.bannerType,
				badgeMsg: req.body.announcement.badgeMsg,
				message: req.body.announcement.announcementMessage,
				redirectLink: req.body.announcement.redirectLink
			},
			announcementJson = await getAnnouncement();

		await announcements.updateOne(
			{ message: announcementJson.message },
			announcement
		);

		return res
			.status(200)
			.json({ success: true, message: "Updated announcement!" })
			.end();
	}
}

export const editRouter = new editRoute();
