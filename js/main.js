const menuHamburger = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");

menuHamburger.addEventListener('click', () => {
	navList.classList.toggle('mobile-menu');

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

// const vgm = document.querySelector("#vgm");
// const vgmDiv = document.querySelector("#vgm-div");
// let vgmOpen = false;

// vgm.addEventListener('click', () => {
// 	if (vgmOpen) {
// 		vgmDiv.style.display = "none";
// 		vgm.innerHTML = "→ Video Game Music";
// 		vgmOpen = false;
// 	}
// 	else {
// 		vgmDiv.style.display = "block";
// 		vgm.innerHTML = "↓ Video Game Music";
// 		vgmOpen = true;
// 	}
// });

/* <li><a href="#vgm">Video Game Music</a></li>
<li><a href="#animations">Music for Animations</a></li>
<li><a href="#lofi">Lo-fi - beats to study/relax to</a></li>
<li><a href="#ambient">Ambient Music</a></li>
<li><a href="#piano">Piano Works</a></li>
<li><a href="#electronic">Electronic Music</a></li>
<li><a href="#experimental">Experimental Music</a></li>
<li><a href="#trap">Trap Beats</a></li>
<li><a href="#short-films">Music for Short Films</a></li>
<li><a href="#jazz">Jazz Fusion</a></li> */

function OpenableDiv(titleTag) {
	this.title = document.getElementById(titleTag);
	this.div = document.getElementById(titleTag + "-div");
	this.open = false;
	
	this.title.addEventListener('click', () => {
		if (this.open) {
			this.div.style.display = "none";
			this.title.innerHTML = "→ " + this.title.innerHTML.substring(2);
			this.open = false;
		}
		else {
			this.div.style.display = "block";
			this.title.innerHTML = "↓ " + this.title.innerHTML.substring(2);
			this.open = true;
		}
	});
}

if (document.querySelector('title').innerHTML === 'Eric Holzer - Music') {
	const vgm = new OpenableDiv("vgm");
	const animations = new OpenableDiv("animations");
	const lofi = new OpenableDiv("lofi");
	const ambient = new OpenableDiv("ambient");
	const piano = new OpenableDiv("piano");
	const electronic = new OpenableDiv("electronic");
	const experimental = new OpenableDiv("experimental");
	const trap = new OpenableDiv("trap");
	const shortFilms = new OpenableDiv("short-films");
	const jazz = new OpenableDiv("jazz");
}

if (document.querySelector('title').innerHTML === 'Eric Holzer - Projects') {
	const libft = new OpenableDiv("libft");
	const push_swap = new OpenableDiv("push_swap");
	const FdF = new OpenableDiv("FdF");
	const minishell = new OpenableDiv("minishell");
	const miniRT = new OpenableDiv("miniRT");
	const cpp = new OpenableDiv("cpp");

	const wireframe = new OpenableDiv("wireframe");
	const meteo = new OpenableDiv("meteo");
	const kizuna = new OpenableDiv("kizuna");
	const vec2 = new OpenableDiv("vec2");
	const portfolio = new OpenableDiv("portfolio");
	const richard = new OpenableDiv("richard");
}