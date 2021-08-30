import axios from "axios";
import { Request, Response } from "express";

import { getFile } from "@/util/getFile";
import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

export default class fetchStatsRoute {
	async index(req: Request, res: Response): Promise<void> {
		if (!req.query.fileName) {
			return res
				.status(404)
				.json({
					success: false,
					message: "No fileName specified."
				})
				.end();
		}

		switch (req.query.source) {
			case "sourceforge":
				{
					try {
						const dateNow = new Date().toISOString().slice(0, 10),
							statsURL = `https://sourceforge.net/projects/dotos-downloads/files/${req.query.fileName}/stats/json?start_date=2000-01-01&end_date=${dateNow}`,
							{ status, data } = await axios.get(statsURL, {
								headers: { "Content-Type": "application/json" }
							});

						if (status !== 200) return res.status(404).end();

						return res.json({ success: true, downloadCount: data.total }).end();
					} catch (err) {
						return res
							.status(404)
							.json({
								success: false,
								message: "File not found."
							})
							.end();
					}
				}
				break;

			case "github":
				{
					const MyOctokit = Octokit.plugin(restEndpointMethods),
						octokit = new MyOctokit(),
						apiURL = (req.query.fileName as string).split("/"),
						deviceData = await getFile("devices", `${apiURL[5]}.json`);
					try {
						const response = await octokit.rest.repos.getReleaseByTag({
							owner: "dotOS-devices",
							repo: `device_${deviceData.brandName.toLowerCase()}_${deviceData.codename.toLowerCase()}`,
							tag: apiURL[6] === "latest" ? deviceData.latestVersion : apiURL[6]
						});

						const file = response.data.assets.find(asset =>
							asset.name.includes(
								apiURL[7] === "vanilla" ? "OFFICIAL" : "GAPPS"
							)
						);

						if (!file) {
							return res
								.status(404)
								.json({
									success: false,
									message: "Release not found."
								})
								.end();
						}

						return res
							.json({ success: true, downloadCount: file.download_count })
							.end();
					} catch (e) {
						return res
							.status(404)
							.json({
								success: false,
								message: "Can't get downloadCount."
							})
							.end();
					}
				}
				break;
			default:
				{
					return res
						.status(404)
						.json({
							success: false,
							message: "No source specified."
						})
						.end();
				}
				break;
		}
	}
}

export const fetchStatsRouter = new fetchStatsRoute();
