import axios from "axios";

export const getData = async (
	repo: string,
	subFolder: string,
	fileName: string
) => {
	try {
		const repoURL = `https://raw.githubusercontent.com/DotOS/${repo}/${
				repo === "XDA_Template-changelogs" ? "master" : "dot11"
			}`,
			{ status, data } = await axios.get(
				`${repoURL}/${subFolder}/${fileName}`,
				{
					headers: { "Content-Type": "application/json" }
				}
			);

		if (status !== 200) return null;
		return data;
	} catch (err) {
		console.log(err);
	}
};
