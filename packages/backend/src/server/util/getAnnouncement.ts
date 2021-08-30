import announcements from "@/models/system/announcements";

export const getAnnouncement = async () => {
	const announcement = await announcements.find({}),
		announcementJson = {
			showBanner: announcement[0].show,
			badgeMsg: announcement[0].badgeMsg,
			message: announcement[0].message,
			redirectLink: announcement[0].redirectLink
		};

	return announcementJson;
};
