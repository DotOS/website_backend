import { Document, Schema, model } from "mongoose";

export interface deviceAnnouncementsType extends Document {
	show: boolean;
	message: string;
	codeName: string;
}

const deviceAnnouncementsSchema: Schema = new Schema(
	{
		show: { type: Boolean, required: true },
		message: { type: String, required: true },
		codeName: { type: String, required: true }
	},
	{ strict: true }
);

export default model<deviceAnnouncementsType>(
	"deviceAnnouncements",
	deviceAnnouncementsSchema
);
