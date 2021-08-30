import { Document, model, Schema } from "mongoose";

export interface buildStatsType extends Document {
	type: "OFFICIAL" | "UNOFFICIAL" | "GAPPS";
	installationCount: number;
}

const buildStatsSchema: Schema = new Schema(
	{
		type: { type: String, required: true },
		installationCount: { type: Number, required: true }
	},
	{ strict: true }
);

export default model<buildStatsType>("buildStats", buildStatsSchema);
