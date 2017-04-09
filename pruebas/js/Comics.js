
 var Listcomics = [
				{ nombre:"Watchmen", autor:"Alan Moore",fecha:"Nueva York, 1985", descripcion:"El cruento asesinato de Edward Blake, el Comediante, deja tras de sí un smiley manchado de sangre y moviliza a los pocos justicieros que aún viven. Uno de los más resolutivos e implacables, Rorschach (Walter J. Kovacs), emprende una investigación que le hará reencontrarse con el desengañado Búho Nocturno (Dan Dreiberg), el poderoso Dr. Manhattan (Jon Osterman), el multimillonario Ozymandias, considerado“el hombre más listo del mundo” (Adrian Veidt), y la renuente y atormentada Espectro de Seda (Laurie Juspeczyk). Juntos afrontarán un pasado terrible, bajo la sombra de los Minutemen, y tratarán de superarlo para salvar el futuro… si es que el fin, cada vez más cerca, no llega antes y destruye la Tierra por completo.", url:"image/comic01.jpg"},
				{ nombre:"Superman: Hijo Rojo", autor:"Mark Millar",fecha:"Año 1982", descripcion:"¡Mirad! ¡En el cielo! ¿Es un pájaro? ¿Es un avión? Es… ¡Superman!/nEl extraño visitante de otro planeta que puede cambiar el curso de los ríos, doblar acero con sus propias manos… y que, como campeón de los obreros, libra una batalla interminable por Stalin, el socialismo y la expansión internacional del Pacto de Varsovia.", url:"image/comic02.jpg"},
				{ nombre:"Batman: La broma asesina", autor:"ECC Ediciones",fecha:"ECC Ediciones - 1995", descripcion:"El legendario escritor Alan Moore redefinió la figura del superhéroe con Watchmen y V de Vendetta. En Batman: La broma asesina, aborda los orígenes del mejor supervillano del cómic, el Joker… y con ello cambia el mundo del Hombre Murciélago para siempre.", url:"image/comic03.jpg"},
				{ nombre:"Batman: Caballero Oscuro", autor:"Frank Miller",fecha:" Año - 1986", descripcion:"En 1986 se publicó El regreso del Caballero Oscuro, un cómic escrito y dibujado por Frank Miller en cuyas páginas se narra la historia de cómo Bruce Wayne abandona la lucha contra el crimen tras la muerte de Robin y cómo la retoma a sus 55 años. Esta obra revolucionó la forma de entender y narrar en el cómic mainstream estadounidense, influyendo a toda una generación de autores de todo el mundo. El carácter profundo y misterioso del nuevo Batman despertó de nuevo el interés por la figura del Murciélago y confirmó a Frank Miller como de uno de los grandes genios del arte secuencial de su tiempo.", url:"image/comic04.jpg"},
				{ nombre:"The Ultimates", autor:" Mark Millar",fecha:"Año 1989", descripcion:"Contempla con tus propios ojos la visionaria aventura en la que Mark Millar y Bryan Hitch relatan cómo Nick Furia reúne a los Héroes Más Poderosos de la Tierra: Capitán América, Iron Man, Thor, La Avispa, El Hombre Gigante, Hulk, Ojo de Halcón, Viuda Negra, Mercurio, La Bruja Escarlata… ¡Todos ellos forman la principal línea de defensa contra las nuevas amenazas que afronta el mundo en el siglo XXI… y la primera de ellas está entre ellos mismos!", url:"image/comic05.jpg"},
				{ nombre:"‘Punisher’ (etapa Garth Ennis)", autor:"Garth Ennis",fecha:"Año - 1999", descripcion:"¡El hito que devolvió toda su gloria a Frank Castle y supuso su encuentro con Garth Ennis, su guionista definitivo! Llevaba demasiado tiempo ausente, el suficiente para que la mala hierba creciera en las calles de Nueva York. Ahora, El Castigador ha vuelto y viene preparado para limpiar las calles.", url:"image/comic06.jpg"},
				{ nombre:"Marvels", autor:"Kurt Busiek",fecha:"Nueva York, 1985", descripcion:"¡La obra maestra absoluta que dio a conocer a Alex Ross (Tierra-X) y catapultó a la fama a Kurt Busiek (Los Vengadores)! Un recorrido por los grandes momentos que sirvieron para forjar el Universo Marvel bajo la visión única del fotógrafo Phil Sheldon. Desde los orígenes de los superhéroes a la muerte de Gwen Stacy, de la llegada de Galactus a la Guerra Kree-Skrull, de la irrupción de los mutantes a la boda de Reed Richards y Sue Storm… ¡Los Prodigios están aquí!", url:"image/comic07.jpg"},
				{ nombre:"Death Note", autor:"Tsugumi Ohba",fecha:"Año 2000", descripcion:"Death Note supuso toda una revolución en el manga: el protagonista, tras encontrar un objeto mágico de inmenso poder, lo utiliza no para hacer el bien… sino para convertirse en el gobernante supremo del mundo.", url:"image/comic08.jpg"},
				{ nombre:"The Boys", autor:"Garth Ennis",fecha:"Año - 1996", descripcion:"En un mundo en el que los superhéroes son unos degenerados corruptos controlados por una corporación, es necesario que alguien les mantenga a raya. Ese alguien son los miembros de The Boys , tipos duros y sin escrúpulos que han aceptado adquirir superpoderes para poder patear el culo de esos falsos superhéroes.", url:"image/comic09.jpg"},
				{ nombre:"Watchmen - 2", autor:"Alan Moore",fecha:"Nueva York, 1985", descripcion:"El cruento asesinato de Edward Blake, el Comediante, deja tras de sí un smiley manchado de sangre y moviliza a los pocos justicieros que aún viven. Uno de los más resolutivos e implacables, Rorschach (Walter J. Kovacs), emprende una investigación que le hará reencontrarse con el desengañado Búho Nocturno (Dan Dreiberg), el poderoso Dr. Manhattan (Jon Osterman), el multimillonario Ozymandias, considerado“el hombre más listo del mundo” (Adrian Veidt), y la renuente y atormentada Espectro de Seda (Laurie Juspeczyk). Juntos afrontarán un pasado terrible, bajo la sombra de los Minutemen, y tratarán de superarlo para salvar el futuro… si es que el fin, cada vez más cerca, no llega antes y destruye la Tierra por completo.", url:"image/comic01.jpg"}
			]

//metodo para add un nuevo comic ala lista se utiliza la  funcion push para agregar un nuevo elemento al array 
function NewComic(nombre,autor,fecha,descripcion,url){

	var comicArray =JSON.parse(localStorage.getItem("Aproductos"));
	this.nombre = nombre;
	this.autor = autor;
	this.fecha = fecha;
	this.descripcion = descripcion;
	this.url = url;

	comicArray.push(this);
	localStorage.setItem("Aproductos", JSON.stringify(comicArray));
}

//metodo para mprimir todos los elemnetos que tenga el array Listcomics
function mostrarComics() {
	for( var i = 0 ;i<Listcomics.length;i++ ){
		console.log(Listcomics[i])
	}
}

//metodo para buscar por nombre de comic en el array  "listcomics"
function buscarComic(parm1) {
	for( var i = 0 ;i<users.length;i++ ){
		var comii = Listcomics[i].nombre
		if(comii.toUpperCase() == parm1.toUpperCase()){
			return Listcomics[i];			
		}
	}
	 return null ;
}

function getComics(){
	return Listcomics;
}