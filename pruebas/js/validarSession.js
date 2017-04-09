function Validar_admin () {
	console.log(sessionStorage.getItem("Roluser"));
	if(sessionStorage.getItem("Roluser") != 1){
		sessionStorage.setItem("Nombreuser", null);
	    sessionStorage.setItem("Roluser", null);
		location.href="login.html";

	}
}

function Validar_user () {
	console.log(sessionStorage.getItem("Roluser"));
	if(sessionStorage.getItem("Roluser") != null){
		location.href="login.html";
	}
}

function cerrarSesion() {
		sessionStorage.setItem("Nombreuser", null);
	    sessionStorage.setItem("Roluser", null);
		location.href="login.html";
}
