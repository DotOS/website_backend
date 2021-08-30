export const getSize = (bytes: number, decimals = 2) => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024,
		dm = decimals < 0 ? 0 : decimals,
		sizes = ["Bytes", "KB", "MB", "GB"],
		i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
