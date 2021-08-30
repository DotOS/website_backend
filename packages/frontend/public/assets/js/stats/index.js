const dataTab = document.querySelectorAll("[data-tab]");
dataTab.forEach((_, i) => {
	dataTab[i].addEventListener("click", event => {
		console.log(event);
		changeTab(event.target);
		event.target.blur();
	});
});

const changeTab = event => {
	if (typeof event === "undefined") return;

	const button = event,
		name = event.dataset.tab,
		content = document.querySelector(`div[data-tab-content="${name}"]`);

	if (
		!button.classList.contains("text-gray-100") &&
		!button.classList.contains("bg-blue-500")
	) {
		button.classList.add("text-gray-100", "bg-blue-500");
		button.classList.remove("text-gray-500", "bg-gray-200");

		if (
			button.classList.contains("text-gray-100") &&
			button.classList.contains("bg-blue-500")
		) {
			for (let sibling of button.parentNode.children) {
				if (sibling !== button) {
					sibling.classList.remove("text-gray-100", "bg-blue-500");
					sibling.classList.add("text-gray-500", "bg-gray-200");
				}
			}
		}
	}

	switch (name) {
		case "device":
			{
				document.querySelector(
					'div[data-tab-content="country"]'
				).style.display = "none";
				content.style.removeProperty("display");
			}
			break;

		case "country":
			{
				document.querySelector('div[data-tab-content="device"]').style.display =
					"none";
				content.style.removeProperty("display");
			}
			break;
	}
};
