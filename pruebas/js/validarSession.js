function Validar_admin () {
	console.log(sessionStorage.getItem("Roluser"));
	if(sessionStorage.getItem("Roluser") != 1){
		alert("No cuenta Con los Permisos")
		sessionStorage.setItem("Nombreuser", null);
	    sessionStorage.setItem("Roluser", null);
		location.href="login.html";

	}
}

function Validar_user () {
	
	console.log(sessionStorage.getItem("Roluser"));
	if(!sessionStorage.getItem("Roluser"))  {
		
		location.href="login.html";
	}
	if(sessionStorage.getItem("Roluser").valueOf() == null)  {
		
		location.href="login.html";
	}
	if(sessionStorage.getItem("Roluser").valueOf() == "null")  {
		
		location.href="login.html";
	}
	
	
}

function cerrarSesion() {
		sessionStorage.setItem("Nombreuser", null);
	    sessionStorage.setItem("Roluser", null);
		location.href="login.html";
}
