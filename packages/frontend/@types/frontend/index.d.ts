interface TeamMembers {
	teamMembers: TeamMemberOrHonorableMentions[];
	honorableMentions: TeamMemberOrHonorableMentions[];
}
interface TeamMemberOrHonorableMentions {
	fullName: string;
	role?: string;
	ghUsername: string;
}
interface faqJSON {
	question: string;
	answer: string;
}
interface Device {
	codename: string | string[];
	deviceName: string;
	brandName: string;
	otaEnabled: boolean;
	latestVersion: string;
	discontinued: boolean;
	deviceChangelog: Changelog[] | null;
	releases: Releases[] | null;
	maintainerInfo: Maintainer;
	links: Links;
}
interface MinimalisticDevice {
	codename: string | string[];
	deviceName: string;
	brandName: string;
	releases: Releases[] | null;
}
interface Changelog {
	timestamp: number;
	changes: string[];
}
interface Releases {
	type: "gapps" | "vanilla";
	generatedAt: number;
	hash: string;
	fileName: string;
	url: string;
	requireCleanFlash: boolean;
	images: Images[] | null;
	size: number;
	version: string;
	latest: boolean;
}
interface Images {
	type: "boot" | "recovery";
	url: string;
}
interface Maintainer {
	name: string | null;
	profileURL: string | null;
}
interface Links {
	xda: string | null;
	telegram: string | null;
}
interface Statistics {
	data: StatsDevice[];
	blacklist: string[];
}
interface StatsDevice {
	codename: string | string[];
	deviceName: string;
	brand: string;
	installationCount: number;
}
interface StatsCountry {
	countryName: string;
	shortCode: string;
	installationCount: number;
}
interface StatisticsJSON {
	buildCount: {
		official: number;
		unofficial: number;
	};
	sortedJSONs: {
		devices: StatsDevice[];
		countries: StatsCountry[];
	};
	unknownCount: {
		devices: number;
		countries: number;
	};
}
interface ErrorJSON {
	success: boolean;
	error: string;
}
interface Contributors {
	name: string;
	subtitle: string;
	members: MembersEntity[];
}
interface MembersEntity {
	name: string;
	links: Links;
}
interface Links {
	github: string;
	telegram: string;
}
