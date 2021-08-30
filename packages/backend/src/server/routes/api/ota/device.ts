import { Request, Response } from "express";

import { getFile } from "@/util/getFile";

interface Releases {
	type: "gapps" | "vanilla";
	generatedAt: number;
	hash: string;
	fileName: string;
	url: string;
	requireCleanFlash: boolean;
	size: number;
	version: string;
	latest: boolean;
}

export default class otaDeviceRoute {
	async releases(req: Request, res: Response): Promise<void> {
		if (!req.params.codename) {
			return res
				.status(403)
				.json({
					success: false,
					error: "No information provided."
				})
				.end();
		}

		const deviceReleases = await getFile(
			"devices",
			`${req.params.codename}.json`
		);
		if (!deviceReleases) {
			return res
				.status(404)
				.json({
					success: false,
					error: "Device not found."
				})
				.end();
		}

		switch (req.params.releaseType) {
			case "gapps":
				{
					const gappsReleases: Releases[] = [];
					if (deviceReleases.releases) {
						switch (req.query.version) {
							case "latest":
								{
									const latestRelease = deviceReleases.latestVersion,
										releases = deviceReleases.releases.find(
											(release: {
												type: "gapps" | "vanilla";
												version: string;
											}) =>
												release.version === latestRelease &&
												release.type === "gapps"
										);

									if (releases) gappsReleases.push(releases);
								}
								break;
							default:
								{
									if (req.query.version) {
										const releases = deviceReleases.releases.find(
											(release: {
												type: "gapps" | "vanilla";
												version: string;
											}) =>
												release.version === req.query.version &&
												release.type === "gapps"
										);

										if (releases) gappsReleases.push(releases);
									} else {
										deviceReleases.releases.map((specificRelease: Releases) => {
											if (specificRelease.type === "gapps")
												gappsReleases.push(specificRelease);
										});
									}
								}
								break;
						}
					}

					const returnJSON = {
						codename: deviceReleases.codename,
						deviceName: deviceReleases.deviceName,
						brandName: deviceReleases.brandName,
						releases: gappsReleases.length !== 0 ? gappsReleases : null
					};

					return res.json(returnJSON).end();
				}
				break;
			case "vanilla":
				{
					const vanillaReleases: Releases[] = [];
					if (deviceReleases.releases) {
						switch (req.query.version) {
							case "latest":
								{
									const latestRelease = deviceReleases.latestVersion,
										releases = deviceReleases.releases.find(
											(release: {
												type: "gapps" | "vanilla";
												version: string;
											}) =>
												release.version === latestRelease &&
												release.type === "vanilla"
										);

									if (releases) vanillaReleases.push(releases);
								}
								break;
							default:
								{
									if (req.query.version) {
										const version = deviceReleases.releases.find(
											(release: {
												type: "gapps" | "vanilla";
												version: string;
											}) =>
												release.version === req.query.version &&
												release.type === "vanilla"
										);
										if (version) vanillaReleases.push(version);
									} else {
										deviceReleases.releases.map((specificRelease: Releases) => {
											if (specificRelease.type === "vanilla")
												vanillaReleases.push(specificRelease);
										});
									}
								}
								break;
						}
					}

					const returnJSON = {
						codename: deviceReleases.codename,
						deviceName: deviceReleases.deviceName,
						brandName: deviceReleases.brandName,
						releases: vanillaReleases.length !== 0 ? vanillaReleases : null
					};

					return res.json(returnJSON).end();
				}
				break;
			default:
				{
					const returnJSON = {
						codename: deviceReleases.codename,
						deviceName: deviceReleases.deviceName,
						brandName: deviceReleases.brandName,
						releases: deviceReleases.releases ? deviceReleases.releases : null
					};

					return res.json(returnJSON).end();
				}
				break;
		}
	}

	async deviceInfo(req: Request, res: Response): Promise<void> {
		if (!req.params.codename) {
			return res
				.status(403)
				.json({
					success: false,
					error: "No information provided."
				})
				.end();
		}

		const deviceReleases = await getFile(
			"devices",
			`${req.params.codename}.json`
		);
		if (!deviceReleases) {
			return res
				.status(404)
				.json({
					success: false,
					error: "Device not found."
				})
				.end();
		}

		return res.json(deviceReleases).end();
	}

	async maintainerInfo(req: Request, res: Response): Promise<void> {
		if (!req.params.codename) {
			return res
				.status(403)
				.json({
					success: false,
					error: "No information provided."
				})
				.end();
		}

		const deviceReleases = await getFile(
			"devices",
			`${req.params.codename}.json`
		);
		if (!deviceReleases) {
			return res
				.status(404)
				.json({
					success: false,
					error: "Device not found."
				})
				.end();
		}

		const returnJSON = {
			codename: deviceReleases.codename,
			deviceName: deviceReleases.deviceName,
			brandName: deviceReleases.brandName,
			maintainerInfo: deviceReleases.maintainerInfo
		};

		return res.json(returnJSON).end();
	}

	async deviceChangelog(req: Request, res: Response): Promise<void> {
		if (!req.params.codename) {
			return res
				.status(403)
				.json({
					success: false,
					error: "No information provided."
				})
				.end();
		}

		const deviceReleases = await getFile(
				"devices",
				`${req.params.codename}.json`
			),
			romChangelog = await getFile("", "changelog.json");

		if (!deviceReleases) {
			return res
				.status(404)
				.json({
					success: false,
					error: "Device not found."
				})
				.end();
		}

		const changelogArray: { timestamp: number; changes: string | string[] }[] =
			[];

		if (deviceReleases.deviceChangelog) {
			deviceReleases.deviceChangelog.map(
				(changelogItem: { timestamp: number; changes: string[] | string }) => {
					changelogItem.changes = (changelogItem.changes as string[])
						.map(changes => `\u2022 ${changes}`)
						.join("\n");
					changelogArray.push(changelogItem);
				}
			);
		}

		const latestChangelog = changelogArray.sort((a, b) =>
				a.timestamp > b.timestamp ? -1 : 1
			)[0],
			returnJSON = {
				codename: deviceReleases.codename,
				deviceName: deviceReleases.deviceName,
				brandName: deviceReleases.brandName,
				deviceChangelog:
					req.query.version === "latest"
						? latestChangelog
						: changelogArray.length >= 1
						? changelogArray
						: null,
				romChangelog: req.query.version === "latest" ? romChangelog : null
			};

		return res.json(returnJSON).end();
	}
}

export const otaDeviceRouter = new otaDeviceRoute();
