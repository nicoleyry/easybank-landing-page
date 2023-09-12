let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');
let menuCover = document.getElementById('menu-cover');

let triggerMenu = () => {
	if(menuOpen.classList.contains('show')) { // show the menu
		menuOpen.classList.remove('show');
		menuClose.classList.add('show');
		menuCover.classList.add('show');
	} else { // close the menu
		menuClose.classList.remove('show');
		menuOpen.classList.add('show');
		menuCover.classList.remove('show');
	}
};

menuOpen.addEventListener('click', triggerMenu);
menuClose.addEventListener('click', triggerMenu);
menuCover.addEventListener('click', (e) => {
	let classlist = e.target.classList;
	classlist.contains('menu-cover') ? triggerMenu() : '';
});