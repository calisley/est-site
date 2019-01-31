function openMenu(){
	document.getElementsByClassName('sidebar_content')[0].style.display = "block";
	document.getElementById('menu_button').style.display = 'none';
}
function closeMenu() {
	document.getElementsByClassName('sidebar_content')[0].style.display = "none";
	document.getElementById('menu_button').style.display = 'block';
}