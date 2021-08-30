import { readFileSync } from "fs";

export const getFile = async (subFolder: string, fileName: string) => {
	try {
		return JSON.parse(readFileSync(`./cache/${subFolder}/${fileName}`, "utf8"));
	} catch (err) {
		return null;
	}
};
