const hamburger = document.getElementById("hamburgerbtn"),
	mobileMenu = document.getElementById("mobileMenu"),
	navcontainer = document.getElementById("myTopnav"),
	logo = document.getElementById("logo");

hamburger.addEventListener("click", () => {
	mobileMenu.classList.toggle("active");
	mobileMenu.classList.toggle("hidden");
	navcontainer.classList.toggle("inline-block");
	logo.classList.toggle("pl-5");
});
