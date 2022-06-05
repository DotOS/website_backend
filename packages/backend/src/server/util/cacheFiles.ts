import { existsSync, mkdirSync, writeFileSync } from "fs";

import { getData } from "./getData";
import { logger } from "../config";

export const cacheFiles = async () => {
	logger.extend("cache")("Caching files...");
	try {
		if (!existsSync("./cache")) mkdirSync("./cache");
		if (!existsSync("./cache/devices")) mkdirSync("./cache/devices");

		const devices = await getData("official_devices", "", "devices.json"),
			stats = await getData("website_api", "", "statistics.json"),
			teams = await getData("website_api", "", "team.json"),
			changelog = await getData(
				"XDA_Template-changelogs",
				"",
				"changelogs.json"
			);

		Object.keys(devices).forEach(device =>
			Object.keys(devices[device]).forEach(async deviceCodeName => {
				const deviceInfo = await getData(
					"official_devices",
					"devices",
					`${deviceCodeName}.json`
				);
				await writeFileSync(
					`./cache/devices/${deviceCodeName}.json`,
					JSON.stringify(deviceInfo)
				);
			})
		);

		await writeFileSync("./cache/devices.json", JSON.stringify(devices));
		await writeFileSync("./cache/statistics.json", JSON.stringify(stats));
		await writeFileSync("./cache/team.json", JSON.stringify(teams));
		await writeFileSync("./cache/changelog.json", JSON.stringify(changelog));

		logger.extend("cache")("Successfully cached files");
	} catch (error) {
		logger.extend("cache")("Failed to cache files");
	}
};
