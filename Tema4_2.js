//Arrays en JavaScript - TEMA 4 - EJERCICIO 2

var nombre_del_array = new Array ();

var nombre_del_array = new Array (10);

var productos_alimenticios = new Array (); productos_alimenticios [0]=' Pan'; productos_alimenticios [l] =' Agua'; productos_alimenticios [2]=' Lentejas ';

var productos_alimenticios = new Array (); productos_alimenticios [0]=' Pan'; productos_alimenticios [l] =' Agua'; productos_alimenticios [2]=' Lentejas ';

var codigos_productos = new Array(); 
for (var i = 0; i < 10; i++) 
    { codigos_productos[i] = "Codigo_producto " + i; } // Segundo bucle para mostrar los resultados for (var j = 0; j < 10; j++) { console.log(codigos_productos[j]); }

// Segundo bucle para mostrar los resultados for (var j = 0; j < codigos_productos.lenght; j++) { console.log(codigos_productos[j]); }

//Propiedad Prototype
Array.prototype.nueva_propiedad = valor ; Array.prototype.nuevo_metodo = nombre_de_la_funcion ;

// Definición de la variable y arreglo para páginas comerciales 
var paginas_comerciales = new Array(); 
paginas_comerciales.dominio = ".com"; // Definición de la variable y arreglo para páginas gubernamentales var paginas_gubernamentales = new Array(); paginas_gubernamentales.dominio = ".gov"; // Escribir en el documento las extensiones de dominio document.write("Extensión de las páginas comerciales: " + paginas_comerciales.dominio); document.write("<br>Extensión de paginas_gubernamentales.dominio); las páginas gubernamentales: " +

//Push(): Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
var pizzas = new Array("Carbonara", "Quattro_Stagioni", "Diavola"); 
document.write("<br />Longitud del array: " + pizzas.length); 
var numero_de_pizzas = pizzas.push("Margherita", "Boscaiola"); 
document.write("Número de pizzas disponibles: " + numero_de_pizzas + "<br />"); 
document.write(pizzas); 
document.write("<br />Longitud del array: " + pizzas.length);

//concat(): Se utiliza para unir dos o más arrays y devuelve un nuevo array.
var equipos_a = newArray("Real Madrid", "Barcelona", "Valencia"); 
var equipos_b = newArray("Hércules", "Elche", "Valladolid"); 
var equipos_copa_del_rey = equipos_a.concat(equipos_b); 
document.write("Equipos en total: " + equipos_copa_del_rey.length); 
document.write("<br />Equipos que juegan la copa: " + equipos_copa_del_rey);

//join(): Une todos los elementos de un array en una cadena y devuelve esta cadena.
var pizzas = newArray("Carbonara", "Quattro_Stagioni", "Diavola"); 
document.write(pizzas.join("- "));

//reverse(): Invierte el orden de los elementos de un array.
var numeros = newArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
document.write("Array:"+ numeros); 
numeros.reverse();//OJO no devuelve el array al contrario, le da la vuelta document.write("<br />Array inverso:"+ numeros);

//unshift(): Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.

var sedes_JJOO = newArray("Atenas", "Sydney", "Atlanta"); document.write("Nº Sedes "+ sedes_JJOO.length); 
var numero_sedes = sedes_JJOO.unshift("Pekin"); 
document.write("<br />Últimas " + numero_sedes + " sedes olímpicas: " + sedes_JJOO);

//shift(): Elimina el primer elemento de un array y devuelve ese elemento.

var pizzas = new Array("Carbonara", "Quattro_Stagioni", "Diavola"); 
document.write("Lista de pizzas: " + pizzas + "<br />"); 
var pizza_removida = pizzas.shift(); 
document.write("Pizza eliminada de la lista: " + pizza_removida + "<br />"); 
document.write("Nueva lista de pizzas: " + pizzas);

//pop(): Elimina el último elemento de un array y devuelve ese elemento.

var premios = newArray("Coche", "1000 Euros", "Manual de JavaScript");
 document.write("Lista de premios: " + premios + "<br />"); 
 var tercer_premio = premios.pop(); 
 document.write("El tercer premio es: " + tercer_premio + "<br />"); 
 document.write("Quedan los siguientes premios: " + premios);

//slice(): Devuelve una copia de una parte del array dentro de un nuevo array.

var numeros = newArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
var primeros_cinco = numeros.slice(0, 5); 
var ultimos_cuatro = numeros.slice(-4); 
document.write(primeros_cinco + "<br>"); 
document.write(ultimos_cuatro);

//sort(): Ordena los elementos de un array in situ y devuelve el array.

var apellidos = new Array("Pérez", "Guijarro", "Arias", "González"); 
document.write("Array:"+apellidos +"<br />"); 
apellidos.sort(); 
document.write("Array ordenado:"+apellidos +"<br />");

//splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

var coches = newArray("Ferrari", "BMW", "Fiat"); 
document.write("Coches: "+ coches + "<br />"); 
coches.splice(2, 0, "Seat"); 
document.write("Coches Nueva Lista: "+ coches + "<br />"); 
coches.splice(1, 1, "Audi", "Mercedes"); 
document.write("Coches Nueva Lista: "+ coches + "<br />");

