export const API_URL =
	process.env.NODE_ENV === "production"
		? "https://api.droidontime.com"
		: "http://localhost:3030";
