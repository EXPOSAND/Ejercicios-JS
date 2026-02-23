//Variables globales

let listaProductos = [];
let historial = [];

function añadirProductos(tipoProducto) {
    listaProductos.push(tipoProducto);
    let accion = "Se ha guardado " + tipoProducto;
    historial.push(accion);
}

function eliminarProductos(tipoProducto) {
    listaProductos.pop(tipoProducto);
}

function mostrarProductos() {
    if (listaProductos.length == 0) {
        console.log("No hay productos en la lista")
    }
    for (let index = 0; index < listaProductos.length; index++) {
        producto = array[index];
        console.log(producto);
    }
}

function mostrarHistorial() {
    if(historial.length==0){
        console.log("No se han registado acciones");
    }else{
        for (let index = 0; index < historial.length; index++) {
            console.log(historial[index]);
        }
    }
}