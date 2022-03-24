import { connect } from "mongoose";
import { logger } from "../config";

export default async function createDatabaseConnection(): Promise<void> {
	try {
		logger.extend("database")("Connecting to dotOS database");
		await connect(process.env.MONGO_URI as string, {
			serverSelectionTimeoutMS: 5000,
			connectTimeoutMS: 5000
		});
		return logger.extend("database")("Successfully connected to database");
	} catch (err) {
		return logger.extend("database")(
			"Oh no! There was an error when connecting to database, %o",
			err
		);
	}
}
