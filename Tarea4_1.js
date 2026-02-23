/*Realizar una página que al cargar cree otra página nueva: Tendremos una página principal y una secundaria (se creerá llamando a una función). Cada vez que cerremos la página secundaria, volveremos a llamar a la función para crear de nuevo la página. */

function crearVentana() {
    var nuevaVentana = window.open("", "nuevaVentana", "width=400,height=300");
    nuevaVentana.document.write("<html><head><title>Ventana Secundaria</title></head><body><h1>Esta es la ventana secundaria</h1><p>Cierra esta ventana para abrir una nueva.</p></body></html>");
}

window.onload = function() {
    crearVentana();
    window.onfocus = function() {
        if (window.closed) {
            crearVentana();
        }
    };
};
