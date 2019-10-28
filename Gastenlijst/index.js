window.onload = function() {
	var name = localStorage.getItem("name", name);
	var comment = localStorage.getItem("comment", comment);

	if (name = null) {
		name = document.getElementById("usrform").value;
	}
	if (comment  = null) {
		comment = document.getElementById("myTextarea").value;
	}
	document.getElementById("comments").innerHTML = name + ": " + comment;
}

function form() {	
	name = document.getElementById("usrform").value;
	comment = document.getElementById("myTextarea").value;
	localStorage.setItem("name", name);
	localStorage.setItem("comment", comment);
}