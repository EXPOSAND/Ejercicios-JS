/*Instrucciones (ir sacando el resultado de cada operación por pantalla): 
• Crea un array inicial con los siguientes elementos: "Manzana", "Banana", "Cereza". 
• Añade"Durazno" al final del array usando el método push(). 
• Combina el array inicial con otro array que contenga "Mango" y "Piña" usando el método concat(). 
• Unetodos los elementos del array resultante en un string, separado por comas, usando el método join(). 
• Invierte el orden de los elementos del array usando el método reverse(). 
• Añade"Fresa" al inicio del array usando el método unshift(). 
• Elimina el primer elemento del array usando el método shift() y muestra el elemento eliminado. 
• Elimina el último elemento del array usando el método pop() y muestra el elemento eliminado. 
• Extrae una sección del array (por ejemplo, los elementos en las posiciones 1 a 3) usando el método slice(). 
• Ordena los elementos del array alfabéticamente usando el método sort(). 
• Añade"Kiwi" y "Papaya" en la tercera posición del array usando el método splice(). */

// Definición de la variable y arreglo para páginas comerciales

let frutas = new Array("Manzana", "Banana", "Cereza");
document.write("Array inicial: " + frutas + "<br>");

// Añadir "Durazno" al final del array usando push()
frutas.push("Durazno");
document.write("Después de push(): " + frutas + "<br>");

// Combinar con otro array usando concat()
let otras_frutas = new Array("Mango", "Piña");
let frutas_combinadas = frutas.concat(otras_frutas);
document.write("Después de concat(): " + frutas_combinadas + "<br>");

// Unir todos los elementos en un string usando join()
let frutas_string = frutas_combinadas.join(", ");
document.write("Después de join(): " + frutas_string + "<br>");

// Invertir el orden de los elementos usando reverse()
frutas_combinadas.reverse();
document.write("Después de reverse(): " + frutas_combinadas + "<br>");

// Añadir "Fresa" al inicio del array usando unshift()
frutas_combinadas.unshift("Fresa");
document.write("Después de unshift(): " + frutas_combinadas + "<br>");

// Eliminar el primer elemento usando shift() y mostrar el elemento eliminado
let fruta_eliminada_inicio = frutas_combinadas.shift();
document.write("Elemento eliminado con shift(): " + fruta_eliminada_inicio + "<br>");
document.write("Después de shift(): " + frutas_combinadas + "<br>");

// Eliminar el último elemento usando pop() y mostrar el elemento eliminado
let fruta_eliminada_final = frutas_combinadas.pop();
document.write("Elemento eliminado con pop(): " + fruta_eliminada_final + "<br>");
document.write("Después de pop(): " + frutas_combinadas + "<br>");

// Extraer una sección del array usando slice()
let seccion_frutas = frutas_combinadas.slice(1, 4);
document.write("Sección extraída con slice(): " + seccion_frutas + "<br>");

// Ordenar los elementos alfabéticamente usando sort()
frutas_combinadas.sort();
document.write("Después de sort(): " + frutas_combinadas + "<br>");

// Añadir "Kiwi" y "Papaya" en la tercera posición usando splice()
frutas_combinadas.splice(2, 0, "Kiwi", "Papaya");
document.write("Después de splice(): " + frutas_combinadas + "<br>");
