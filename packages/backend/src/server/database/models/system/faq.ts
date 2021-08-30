import { Document, model, Schema } from "mongoose";

export interface faqType extends Document {
	question: string;
	answer: string;
}

const faqSchema: Schema = new Schema(
	{
		question: { type: String, required: true },
		answer: { type: String, required: true }
	},
	{ strict: true }
);

export default model<faqType>("faq", faqSchema);
