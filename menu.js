function openMenu(){
	document.getElementsByClassName('sidebar_content')[0].style.display = "block";
	document.getElementById('menu_button').style.display = 'none';
}
function closeMenu() {
	document.getElementsByClassName('sidebar_content')[0].style.display = "none";
	document.getElementById('menu_button').style.display = 'block';
}

function checkService(){
	var inServe = true; 
	// FOR CHANGING SERVICE STATUS, CHANGE ABOVE TO TRUE OR FALSE. (true for in service, false for out of service.)
	if (inServe == true) {
		
		document.getElementsByClassName('in')[0].style.display = "block";
		document.getElementsByClassName('in')[1].style.display = "block";
		document.getElementsByClassName('out')[0].style.display = "none";
		document.getElementsByClassName('out')[1].style.display = "none";
	}
	else{
		document.getElementsByClassName('in')[0].style.display = "none";
		document.getElementsByClassName('in')[1].style.display = "none";
		document.getElementsByClassName('out')[0].style.display = "block";
		document.getElementsByClassName('out')[1].style.display = "block";	
	}
}