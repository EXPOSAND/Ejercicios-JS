/*Crear una página web (index.html) con dos frames: equipos.htmly detatalles.html 
Debemos crear un array llamado liga que contenga una colección de equipos, mínimo 3 de ellos. 
Cada equipo contendrá información de: Nombre, ciudad, estadio y puntos.*/

// Definición del array de equipos
let liga = [
    { nombre: "Equipo A", ciudad: "Ciudad A", estadio: "Estadio A", puntos: 30 },
    { nombre: "Equipo B", ciudad: "Ciudad B", estadio: "Estadio B", puntos: 25 },
    { nombre: "Equipo C", ciudad: "Ciudad C", estadio: "Estadio C", puntos: 20 }
];

// Función para mostrar la lista de equipos en el frame equipos.html
function mostrarEquipos() {
    let listaEquipos = "<ul>";
    for (let equipo of liga) {
        listaEquipos += "<li><a href='detalles.html?equipo=" + equipo.nombre + "' target='detallesFrame'>" + equipo.nombre + "</a></li>";
    }
    listaEquipos += "</ul>";
    document.getElementById("equiposFrame").innerHTML = listaEquipos;
}
// Llamar a la función para mostrar los equipos al cargar la página
window.onload = mostrarEquipos;
// Función para mostrar los detalles del equipo seleccionado en el frame detalles.html
function mostrarDetalles() {
    let urlParams = new URLSearchParams(window.location.search);
    let equipoNombre = urlParams.get('equipo');
    let equipo = liga.find(e => e.nombre === equipoNombre);
    if (equipo) {
        let detalles = "<h2>" + equipo.nombre + "</h2>";
        detalles += "<p>Ciudad: " + equipo.ciudad + "</p>";
        detalles += "<p>Estadio: " + equipo.estadio + "</p>";
        detalles += "<p>Puntos: " + equipo.puntos + "</p>";
        document.getElementById("detallesFrame").innerHTML = detalles;
    }
}
// Llamar a la función para mostrar los detalles al cargar la página detalles.html
window.onload = mostrarDetalles;
