function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(800).then(() => {
	document.querySelectorAll("#downloadLink").forEach(async el => {
		sleep(50).then(async () => {
			const svgElement =
				'<svg width="18" height="18" viewBox="0 0 28 29" fill="none" xmlns="https://www.w3.org/2000/svg">\n<path d="M21.8425 4.97085C19.9753 3.43783 17.6965 2.49119 15.2927 2.25V4.73693C17.0902 4.95854 18.7276 5.67261 20.0942 6.73141L21.8425 4.97085ZM23.8246 13.2688H26.3116C26.0653 10.7942 25.0804 8.5412 23.5907 6.71909L21.8302 8.46734C22.9162 9.85848 23.6054 11.5177 23.8246 13.2688ZM21.8302 20.5327L23.5907 22.2932C25.1217 20.4248 26.0681 18.1467 26.3116 15.7435H23.8246C23.603 17.4903 22.9139 19.1449 21.8302 20.5327ZM15.2927 24.2631V26.75C17.7673 26.5038 20.0204 25.5188 21.8425 24.0291L20.0819 22.2686C18.7276 23.3274 17.0902 24.0415 15.2927 24.2631ZM18.4814 12.7641L15.2927 15.9405V8.34422H12.8304V15.9405L9.64171 12.7518L7.90578 14.5L14.0616 20.6558L20.2173 14.5L18.4814 12.7641ZM12.8304 24.2631V26.75C6.61306 26.1344 1.75 20.8897 1.75 14.5C1.75 8.1103 6.61306 2.86558 12.8304 2.25V4.73693C7.96734 5.3402 4.21231 9.47688 4.21231 14.5C4.21231 19.5231 7.96734 23.6598 12.8304 24.2631Z" fill="#0E6FFF"></path></svg>';
			try {
				const parsedUrl = new URL(el.textContent),
					url =
						location.hostname === "localhost"
							? "http://localhost:3030"
							: "https://api.droidontime.com";
				source = el.textContent.includes(".zip") ? "sourceforge" : "github";

				el.innerHTML = `${svgElement}\n Loading statistics...`;
				const response = await fetch(
						`${url}/api/fetchStats?fileName=${
							source === "sourceforge"
								? parsedUrl.pathname.replace("/", "")
								: parsedUrl.href
						}&source=${source}`,
						{
							method: "GET",
							headers: { "Content-Type": "application/json" }
						}
					).catch(err => {
						el.innerHTML = `${svgElement}\n Can't load statistics...`;
					}),
					resp = await response.json();

				if (response.status !== 200) el.innerHTML = `${svgElement}\n 0`;
				el.innerHTML = `${svgElement}\n ${
					resp.downloadCount === undefined
						? "Can't load statistics..."
						: resp.downloadCount
				}`;
			} catch (err) {
				console.log(err);
				el.innerHTML = `${svgElement}\n Can't load statistics...`;
			}
		});
	});

	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		const element = document.querySelector("#deviceSection");

		element.scrollIntoView({ behavior: "smooth" });
	}
});
