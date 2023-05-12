var nombre = ["isai", "mica", "dani"];
nombre.length 
 //  length: cuenta cuantos nombre tengo
var cadenaTexto = amigos.join('-');
// separa con el texto asignado entre '' los nombres
nombre.pop();
// pop quita el ultimo elemento del array (en este caso dani)
nombre.push('rut');
// push agrega un ultimo elemento. en este caso agrege a rut.
nombre.shift();
// elimina el primer elemento
nombre.unshift('dani');
// unshift agrega un primer elemento

var familia1 = ["dani","poshi","mica"];
var familia2 = ["mercedes", "jeremias"];
var familia3 = ["javi", "nati"]
var todasLasFamilias = familia.concat(familia2, familia3);
// concat suma todos los arrays en 1.

familia.sort();
// ordena todo alfabeticamente. (solo cadena de texto)
familia.reverse();
// orneda todo al reves.


CONDICIONALES video 7

var edad = 18;

if(edad > 18) {
	console.log('eres mayor de edad');
}
else {
	console.log('eres menor de 18');
}

var pais = argentina;
switch(argentina) {
case'argentina':
	console.log('eres argentino');
	break;
case 'español':
	console.log('eres español');
	break;
case 'brasil':
	console.log('eres brasilero');
	break;
case 'bolivia':
	console.log('eres bolita');
	break;
}

// ciclofor curso javascript video 8

for(inicio; condicion; actualizacion) {

}


