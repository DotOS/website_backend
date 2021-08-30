import { Request, Response } from "express";

import buildStats from "@/models/buildStats";
import countryStats from "@/models/countryStats";
import deviceStats from "@/models/deviceStats";
import versionStats from "@/models/versionStats";

export default class updateRoute {
	async oldMethod(req: Request, res: Response): Promise<void> {
		const body = req.body,
			stats = body?.stats;

		if (!body || body.operation !== "push" || !stats)
			return res.status(500).json({ result: "failure" }).end();

		try {
			const codeName = stats.device,
				userCountry = stats.countryCode,
				buildVersion = stats.version,
				buildType = stats.version.split(".")
					? stats.buildType !== ("OFFICIAL" || "UNOFFICIAL")
						? "UNOFFICIAL"
						: stats.buildType
					: "UNOFFICIAL",
				existingDevice = await deviceStats.findOne({ codeName }),
				existingCountry = await countryStats.findOne({ country: userCountry }),
				existingVersion = await versionStats.findOne({
					versionTag:
						buildVersion.split(".").length === 2
							? `${buildVersion.split(".")[0]}.${buildVersion.split(".")[1]}.0`
							: buildVersion
				}),
				existingBuild = await buildStats.findOne({ type: buildType });

			if (!existingDevice)
				await deviceStats.create({ codeName, installationCount: 1 });
			else
				await deviceStats.updateOne(
					{ codeName },
					{ $inc: { installationCount: 1 } }
				);
			if (!existingCountry)
				await countryStats.create({
					country: userCountry,
					installationCount: 1
				});
			else
				await countryStats.updateOne(
					{ country: userCountry },
					{ $inc: { installationCount: 1 } }
				);
			if (!existingVersion)
				await versionStats.create({
					versionTag:
						buildVersion.split(".").length === 2
							? `${buildVersion.split(".")[0]}.${buildVersion.split(".")[1]}.0`
							: buildVersion,
					installationCount: 1
				});
			else
				await versionStats.updateOne(
					{
						versionTag:
							buildVersion.split(".").length === 2
								? `${buildVersion.split(".")[0]}.${
										buildVersion.split(".")[1]
								  }.0`
								: buildVersion
					},
					{ $inc: { installationCount: 1 } }
				);
			if (!existingBuild)
				await buildStats.create({ type: buildType, installationCount: 1 });
			else
				await buildStats.updateOne(
					{ type: buildType },
					{ $inc: { installationCount: 1 } }
				);

			return res.status(200).json({ result: "success" }).end();
		} catch (err) {
			console.log(err);
			return res.status(500).json({ result: "failure" }).end();
		}
	}

	async newMethod(req: Request, res: Response): Promise<void> {
		const body = req.body,
			device = body?.device;

		if (!body || !device) return res.status(500).json({ success: false }).end();

		try {
			const codeName = device.codeName,
				userCountry = device.countryCode,
				buildVersion = device.version,
				buildType = device.version.split(".")
					? device.buildType !== ("OFFICIAL" || "UNOFFICIAL")
						? "UNOFFICIAL"
						: device.buildType
					: "UNOFFICIAL",
				existingDevice = await deviceStats.findOne({ codeName }),
				existingCountry = await countryStats.findOne({ country: userCountry }),
				existingVersion = await versionStats.findOne({
					versionTag:
						buildVersion.split(".").length === 2
							? `${buildVersion.split(".")[0]}.${buildVersion.split(".")[1]}.0`
							: buildVersion
				}),
				existingBuild = await buildStats.findOne({ type: buildType });

			if (!existingDevice)
				await deviceStats.create({ codeName, installationCount: 1 });
			else
				await deviceStats.updateOne(
					{ codeName },
					{ $inc: { installationCount: 1 } }
				);
			if (!existingCountry)
				await countryStats.create({
					country: userCountry,
					installationCount: 1
				});
			else
				await countryStats.updateOne(
					{ country: userCountry },
					{ $inc: { installationCount: 1 } }
				);
			if (!existingVersion)
				await versionStats.create({
					versionTag:
						buildVersion.split(".").length === 2
							? `${buildVersion.split(".")[0]}.${buildVersion.split(".")[1]}.0`
							: buildVersion,
					installationCount: 1
				});
			else
				await versionStats.updateOne(
					{
						versionTag:
							buildVersion.split(".").length === 2
								? `${buildVersion.split(".")[0]}.${
										buildVersion.split(".")[1]
								  }.0`
								: buildVersion
					},
					{ $inc: { installationCount: 1 } }
				);
			if (!existingBuild)
				await buildStats.create({ type: buildType, installationCount: 1 });
			else
				await buildStats.updateOne(
					{ type: buildType },
					{ $inc: { installationCount: 1 } }
				);

			return res.status(200).json({ success: true }).end();
		} catch (err) {
			console.log(err);
			return res.status(500).json({ success: false }).end();
		}
	}
}

export const updateRouter = new updateRoute();
