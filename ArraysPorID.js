function producto(nombre_in, precio_in, categoria_in) {
  this.nombre = nombre_in;
  this.precio = precio_in;
  this.categoria = categoria_in;
}
const compras = [
  new producto("Manzana", 0.5, "Fruta"),
  new producto("Leche", 1.2, "Lácteos"),
  new producto("Pan", 1.0, "Panadería"),
];
document.write("<br>Manzana: " + compras[0].nombre);
document.write("<br>Manzana: " + compras[0].precio);
document.write("<br>Manzana: " + compras[0].categoria);

function producto(nombre_in, precio_in, categoria_in) {
  this.nombre = nombre_in;
  this.precio = precio_in;
  this.categoria = categoria_in;
}
const comprar = {
  Manzana: new producto("Manzana", 0.5, "Fruta"),
  Leche: new producto("Leche", 1.2, "Lácteos"),
  Pan: new producto("Pan", 1.0, "Panadería"),
};
document.write("<br>Manzana: " + comprar["Manzana"].nombre);
document.write("<br>Manzana: " + comprar["Manzana"].precio);
document.write("<br>Manzana: " + comprar["Manzana"].categoria);

function mostrarInformacion() { 
    console.log("Producto: " + this.nombre); 
    console.log("Precio: " + this.precio + "€"); 
    console.log("Categoría: " + this.categoria); 
    console.log("Cantidad: " + this.cantidad); 
}; 

function producto(nombre_in, precio_in, categoria_in) 
{ this.nombre = nombre_in; 
    this.precio = precio_in; 
    this.categoria = categoria_in;
    this.cantidad = 0; 
}
    // Inicializamos la cantidad en 0 producto 
    
    // Método para mostrar la información del  
    const compra1 = { 
        Manzana: new producto("Manzana", 0.5, "Fruta"), 
        Leche: new producto("Leche", 1.2, "Lácteos"),
        Pan: new producto("Pan", 1.0, "Panadería") 
    }; 

    // Ejemplo de uso del método mostrarInfo 
    compra["Manzana"].mostrarInfo(); compra["Leche"].mostrarInfo(); compra["Pan"].mostrarInfo();  
    
    this.mostrarInfo = mostrarInformacion;

    function producto(nombre_in, precio_in, categoria_in) {
        this.nombre = nombre_in; 
        this.precio = precio_in; 
        this.categoria = categoria_in;
        this.cantidad = 0; 
        // Inicializamos la cantidad en 0 

        // Método para mostrar la información del producto 
        this.mostrarInfo = function () { console.log("Producto: " + this.nombre); 
            console.log("Precio: " + this.precio + "€"); 
            console.log("Categoría: " + this.categoria); 
            console.log("Cantidad: " + this.cantidad); 
        }; 
    }

    //Se puede recorrer un array completo:  
    function producto(nombre_in, categoria_in) { 
        this.nombre = nombre_in; 
        this.precio = precio_in; 
        this.categoria = categoria_in; 
        precio_in, 
        
        // Método para mostrar la información del producto 
        this.mostrarInfo = function () { 
            console.log("Producto: " + this.nombre); 
            console.log("Precio: " + this.precio + "€"); 
            console.log("Categoría: " + this.categoria); 
        }; 
    } 
    
    // Creamos un array de productos 
    const compra2 = [ new producto("Manzana", 0.5, "Fruta"), new producto("Leche", 1.2, "Lácteos"), new producto("Pan", 1.0, "Panadería") ]; 
    
    // // Mostramos la información de cada producto en la consola 
    compra.forEach(
        function (prod) { 
            prod.mostrarInfo(); 
        }
    );
