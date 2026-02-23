/*Define un objeto Libro para crear objetos de tipo libro. 
Propiedades: titulo, autor, anyo, editorial 
Define una función pedirDatosLibros que solicita al usuario los datos de 5 libros mediante prompt y los almacena en un array. 
Define una función generarTabla que genera una tabla HTML con los detalles de los libros. 
Llama a pedirDatosLibros para obtener los datos de los libros y luego a generarTabla para mostrar la tabla en la página web. */

// Definición del objeto Libro
function Libro(titulo, autor, anyo, editorial) {
    this.titulo = titulo;
    this.autor = autor;
    this.anyo = anyo;
    this.editorial = editorial;
}
// Función para pedir datos de libros
function pedirDatosLibros() {
    let libros = [];
    for (let i = 0; i < 5; i++) {
        let titulo = prompt("Introduce el título del libro " + (i + 1) + ":");
        let autor = prompt("Introduce el autor del libro " + (i + 1) + ":");
        let anyo = prompt("Introduce el año de publicación del libro " + (i + 1) + ":");
        let editorial = prompt("Introduce la editorial del libro " + (i + 1) + ":");
        let libro = new Libro(titulo, autor, anyo, editorial);
        libros.push(libro);
    }   
    return libros;
}
// Función para generar la tabla HTML
function generarTabla(libros) {
    let tabla = "<table border='1'><tr><th>Título</th><th>Autor</th><th>Año</th><th>Editorial</th></tr>";
    for (let libro of libros) {
        tabla += "<tr><td>" + libro.titulo + "</td><td>" + libro.autor + "</td><td>" + libro.anyo + "</td><td>" + libro.editorial + "</td></tr>";
    }
    tabla += "</table>";
    document.write(tabla);
}
// Obtener datos de libros y generar la tabla
let libros = pedirDatosLibros();
generarTabla(libros);   

