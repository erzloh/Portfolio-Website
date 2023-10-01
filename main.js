const menuHamburger = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".navbar");

menuHamburger.addEventListener('click', () => {
	navList.classList.toggle('mobile-menu');
	navBar.classList.toggle('mobile-menu');

	if (navList.classList.contains('mobile-menu')) {
		menuHamburger.src = "images/close_icon.png";
		// Deactivate scroll
		document.body.style.overflow = "hidden";
	}
	else {
		menuHamburger.src = "images/burger_menu_icon.png";
		// Activate scroll
		document.body.style.overflow = "auto";
	}
});