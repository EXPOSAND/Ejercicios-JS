//FUNCIONES//TEMA 4 - EJERCICIO 1

//Escape(): Esta función codifica una cadena de texto, reemplazando ciertos caracteres por secuencias de escape.
var input= prompt( "Introduce una cadena"); var inputCodificado = escape(input) ; alert( "Cadena codificada : " + inputCodificado) ;

//Unescape(): Esta función decodifica una cadena de texto que ha sido codificada con la función escape().
var inputDecodificado = unescape(inputCodificado) ; alert( "Cadena decodificada : " + inputDecodificado) ;

//Eval(): Esta función evalúa una cadena de texto como código JavaScript y ejecuta ese código.
var input= prompt ("Introduce una operación numérica"); var resultado= eval (input ); alert ("El resultado de la operación es : " + resultado );

//isFinite(): Esta función determina si un valor es un número finito.
var input= prompt ("Introduce un caracter"); if (isFinite(input)) { alert ("Es un número"); } else { alert("No es un número"); }

//isNaN(): Esta función determina si un valor es NaN (Not-a-Number).
var input= prompt ("Introduce un caracter"); if (isNaN(input)) { alert ("No es un número"); } else { alert("Es un número"); }

//String(): Esta función convierte un valor a una cadena de texto.
var fecha= new Date (); var fechaString = String(fecha); alert ("La fecha actual en STRING es : "+fechaString ); alert ("La fecha actual NO STRING es : "+fecha);

//Number(): Esta función convierte un valor a un número.
var input= prompt ("Introduce un caracter"); var caracter =Number(input); if (isNaN(caracter)) { alert ("No es un número"); } else { alert("Es un número"); }

//parseInt(): Esta función analiza una cadena de texto y devuelve un entero.
var input= prompt("Introduce un valor :"); var inputParsed = parseInt (input); alert("parseInt (" + input + "): " + inputParsed);

//parseFloat(): Esta función analiza una cadena de texto y devuelve un número de punto flotante.
var input= prompt("Introduce un valor :"); var inputParsed = parseFloat (input); alert("parseFloat (" + input + "): " + inputParsed);

//Invocación de funciones

//En html
function ComprobarHumano() { var resultado = prompt("Introduce el resultado de 144 / 12:"); var humano = Verificacion(resultado); if (humano == true) { document.write("Has ingresado el resultado correcto y podrás ver el contenido."); } else { alert("No has introducido el valor correcto"); } }

//En js
var compruebaResultado; if (res == 12) { compruebaResultado = true; } else { compruebaResultado = false; } return compruebaResultado;

