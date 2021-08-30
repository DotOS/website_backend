import { Document, model, Schema } from "mongoose";

export interface versionStatsType extends Document {
	versionTag: string;
	installationCount: number;
}

const versionStatsSchema: Schema = new Schema(
	{
		versionTag: { type: String, required: true },
		installationCount: { type: Number, required: true }
	},
	{ strict: true }
);

export default model<versionStatsType>("versionStats", versionStatsSchema);
