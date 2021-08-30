interface Device {
	name: string;
	brand: string;
	codename: string;
	xda_thread: string;
	builds: Builds;
	maintainers?: MaintainersEntity[] | null;
}
interface Builds {
	gapps?: GappsEntityOrVanillaEntity[] | null;
	vanilla?: GappsEntityOrVanillaEntity[] | null;
}
interface GappsEntityOrVanillaEntity {
	datetime: string;
	filename: string;
	id: string;
	romtype: string;
	size: string;
	url: string;
	version: string;
}
interface MaintainersEntity {
	_id: string;
	name: string;
	url: string;
}

interface StatsDevice {
	brand: string;
	name: string;
	codename: string;
	assert: string[];
	installationCount: number;
}

interface Country {
	countryName: string;
	shortCode: string;
	installationCount: number;
}

interface JWTToken {
	username: string;
}
