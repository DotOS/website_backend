import { Document, model, Schema } from "mongoose";

export interface deviceStatsType extends Document {
	codeName: string;
	installationCount: number;
}

const deviceStatsSchema: Schema = new Schema(
	{
		codeName: { type: String, required: true },
		installationCount: { type: Number, required: true }
	},
	{ strict: true }
);

export default model<deviceStatsType>("deviceStats", deviceStatsSchema);
