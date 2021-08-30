import { Request, Response } from "express";

import { getFile } from "@/util/getFile";

export default class autocompleteDataRoute {
	async index(req: Request, res: Response): Promise<void> {
		const data = await getFile("", "devices.json");

		let dataArray: { device: string; codeName: string }[] = [];

		Object.keys(data).forEach(brand => {
			Object.keys(data[brand]).forEach(device => {
				const devices = {
					device: `[${brand}] ${data[brand][device]} (${device})`,
					codeName: device
				};
				dataArray.push(devices);
			});
		});

		return res.json(dataArray).end();
	}
}

export const autocompleteDataRouter = new autocompleteDataRoute();
