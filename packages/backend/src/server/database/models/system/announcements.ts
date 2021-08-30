import { Document, model, Schema } from "mongoose";

export interface announcementsType extends Document {
	show: boolean;
	bannerType: "info" | "important";
	badgeMsg: string;
	message: string;
	redirectLink: string;
}

const announcementsSchema: Schema = new Schema(
	{
		show: { type: Boolean, required: true },
		bannerType: { type: String, required: true },
		badgeMsg: { type: String, required: true },
		message: { type: String, required: true },
		redirectLink: { type: String, required: true }
	},
	{ strict: true }
);

export default model<announcementsType>("announcements", announcementsSchema);
