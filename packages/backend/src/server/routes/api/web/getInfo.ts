import { Request, Response } from "express";

import buildStats from "@/models/buildStats";
import countryStats from "@/models/countryStats";
import deviceStats from "@/models/deviceStats";
import faq from "@/models/system/faq";
import { getAnnouncement } from "@/util/getAnnouncement";
import { getFile } from "@/util/getFile";

interface StatsDevice {
	codename: string | string[];
	deviceName: string;
	brand: string;
	installationCount: number;
}

export default class getInfoRoute {
	async index(req: Request, res: Response): Promise<void> {
		if (!req.params.type) {
			return res.status(403).json({ success: false }).end();
		}

		switch (req.params.type) {
			case "getAnnouncement":
				{
					const data = await getAnnouncement();

					return res.json(data).end();
				}
				break;
			case "getMembers":
				{
					const data = await getFile("", "team.json");

					return res.json(data).end();
				}
				break;
			case "getFAQ":
				{
					const data = await faq.find({});

					return res.json(data).end();
				}
				break;
			case "getDevices":
				{
					const data = await getFile("", "devices.json");

					return res.json(data).end();
				}
				break;
			case "getStatistics":
				{
					const devices = await getFile("", "statistics.json"),
						deviceData: StatsDevice[] = devices["stats"],
						deviceBlacklist = devices["blacklist"],
						deviceStatistics = await deviceStats.find({}),
						countryStatistics = await countryStats.find({}),
						buildStatistics = await buildStats.find({}),
						countryData: Country[] = [];

					let unknownDevices = 0,
						unknownCountries = 0,
						officialBuildCount = 0,
						unofficialBuildCount = 0;

					deviceStatistics.forEach(async stats => {
						const codeName = stats.codeName,
							installationCount = stats.installationCount;

						if (deviceBlacklist.includes(codeName)) {
							unknownDevices += installationCount;
							return;
						}

						let index: number | undefined = undefined;

						deviceData.map((e, i) => {
							switch (Array.isArray(e.codename)) {
								case true:
									{
										if (e.codename.includes(codeName)) return (index = i);
									}
									break;
								case false:
									{
										if (e.codename === codeName) return (index = i);
									}
									break;
							}
						});

						if (typeof index === "undefined") {
							const jsonDevice = {
								brand: "Unknown",
								deviceName: "Unknown",
								codename: codeName,
								installationCount
							};

							deviceData.push(jsonDevice);
							return;
						}

						if (deviceData[index].installationCount) {
							deviceData[index].installationCount += installationCount;
						} else {
							deviceData[index].installationCount = installationCount;
						}
					});

					const sortDevices = deviceData.sort(
						(a, b) => b["installationCount"] - a["installationCount"]
					);

					countryStatistics.forEach(country => {
						const countryShort = country.country,
							installationCount = country.installationCount;

						let fullCountryName: string;

						try {
							// @ts-ignore
							const regionNames = new Intl.DisplayNames(["en"], {
								type: "region"
							});
							fullCountryName = regionNames.of(
								countryShort.toUpperCase()
							) as string;
						} catch (err) {
							unknownCountries += installationCount;
							return;
						}

						const jsonCountry = {
							countryName: fullCountryName,
							shortCode: countryShort.toUpperCase(),
							installationCount
						};

						countryData.push(jsonCountry);
					});

					const sortCountries = countryData.sort(
						(a, b) => b["installationCount"] - a["installationCount"]
					);

					buildStatistics.forEach(build => {
						const buildType = build.type,
							installationCount = build.installationCount;

						if (["OFFICIAL", "GAPPS"].includes(buildType)) {
							officialBuildCount += installationCount;
						} else {
							unofficialBuildCount += installationCount;
						}
					});

					const returnJSON = {
						buildCount: {
							official: officialBuildCount,
							unofficial: unofficialBuildCount
						},
						sortedJSONs: {
							devices: sortDevices,
							countries: sortCountries
						},
						unknownCount: {
							devices: unknownDevices,
							countries: unknownCountries
						}
					};

					return res.json(returnJSON).end();
				}
				break;
			default:
				{
					return res.status(403).json({ success: false }).end();
				}
				break;
		}
	}
}

export const getInfoRouter = new getInfoRoute();
