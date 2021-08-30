import { Document, model, Schema } from "mongoose";

export interface countryStatsType extends Document {
	country: string;
	installationCount: number;
}

const countryStatsSchema: Schema = new Schema(
	{
		country: { type: String, required: true },
		installationCount: { type: Number, required: true }
	},
	{ strict: true }
);

export default model<countryStatsType>("countryStats", countryStatsSchema);
