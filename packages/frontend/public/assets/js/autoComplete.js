function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function loadScript() {
	const autoCompleteJS = document.createElement("script");
	autoCompleteJS.src =
		"https://cdnjs.cloudflare.com/ajax/libs/tarekraafat-autocomplete.js/10.2.1/autoComplete.min.js";

	document.body.appendChild(autoCompleteJS);

	autoCompleteJS.addEventListener("load", () => {
		sleep(300).then(() => {
			const autoCompleteConfig = {
					data: {
						src: async () => {
							try {
								const url =
									location.hostname === "localhost"
										? "http://localhost:3030"
										: "https://api.droidontime.com";
								document
									.getElementById("autoComplete")
									.setAttribute("placeholder", "Loading...");
								const source = await fetch(`${url}/api/autocompleteData`),
									data = await source.json();
								document
									.getElementById("autoComplete")
									.setAttribute("placeholder", "Search your device");

								return data;
							} catch (err) {
								return err;
							}
						},
						keys: ["device"],
						cache: true
					},
					events: {
						input: {
							focus() {
								const inputValue =
									document.querySelector("#autoComplete").value;

								if (inputValue.length) autoCompleteJS.start();
							},
							selection(event) {
								const selection = event.detail.selection.value;

								window.location.assign(`/devices/${selection.codeName}`);
							}
						}
					}
				},
				autoCompleteJS = new autoComplete(autoCompleteConfig);
		});
	});
}

loadScript();
