
	  //user.nombre = nombre;
	  //user.contrasena = contrasena;
	  //user.correo = correo;
	  //user.rol = rol;
	  //console.log(user)

 var users = [
				{ nombre:"admin", contrasena:"admin",correo:"ADMIN",rol:"1"},
				{ nombre:"user",contrasena:"user",correo:"USER", rol:"2"},
			]


function newUser(nombre, contrasena, correo, rol) {
	
		this.nombre = nombre;
	  	this.contrasena = contrasena;
		this.correo = correo.toUpperCase();
		this.rol = rol;

		users.push(this);				
}


function mostrarUser() {
	for( var i = 0 ;i<users.length;i++ ){
		console.log(users[i])
	}
}

function buscarUser(parm1) {


	for( var i = 0 ;i<users.length;i++ ){
		if(users[i].correo == parm1.toUpperCase()){
			return users[i];
			
		}
	}
	 return null ;

}