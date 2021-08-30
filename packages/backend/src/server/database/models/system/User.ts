import { Document, model, Schema } from "mongoose";

export interface UserType extends Document {
	username: string;
	password: string;
	role: "owner" | "administrator";
	token: string;
}

const UserSchema: Schema = new Schema(
	{
		username: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: String, required: true },
		token: { type: String, default: null, required: false }
	},
	{ strict: true }
);

export default model<UserType>("User", UserSchema);
