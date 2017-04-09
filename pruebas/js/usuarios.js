 var users = [
				{ nombre:"admin", contrasena:"admin",correo:"ADMIN",rol:"1"},
				{ nombre:"user",contrasena:"user",correo:"USER", rol:"2"},
			]


function newUser(nombre, contrasena, correo, rol) {
	var userArray =JSON.parse(localStorage.getItem("Ausuarios"))
	//console.log(userArray)
		this.nombre = nombre;
	  	this.contrasena = contrasena;
		this.correo = correo.toUpperCase();
		this.rol = rol;

		userArray.push(this);

	localStorage.setItem("Ausuarios", JSON.stringify(userArray));					
}


function mostrarUser() {
	for( var i = 0 ;i<users.length;i++ ){
		console.log(users[i])
	}
}

function buscarUser(parm2,parm1) {

	var userArray =JSON.parse(parm2)

	console.log(parm2+''+parm1)
	for( var i = 0 ;i<userArray.length;i++ ){
		if(userArray[i].correo == parm1.toUpperCase()){
			return userArray[i];
			
		}
	}
	 return null ;

}

function getUser(){
	return users;
}