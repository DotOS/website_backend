const selectDevice = index => {
	const menulinks = document.getElementsByClassName("menelinks");
	for (let i = 0; i <= menulinks.length; i++) {
		if (index === i) menulinks[i - 1].classList.toggle("hidden");
	}
};
