function Coche(marca_in, modelo_in, anyo_in) {
  this.marca = marca_in;
  this.modelo = modelo_in;
  this.anyo = anyo_in;
}

var coches = new Array(4);
coches[0] = new Coche("Ferrari", "Scaglietti", "2010");
coches[1] = new Coche("BMW", "Z4", "2010");
coches[2] = new Coche("Seat", "Toledo", "1999");
coches[3] = new Coche("Fiat", "500", "1995");
for (var i = 0; i < coches.length; i++) {
  document.write(
    "Marca: " +
      coches[i].marca +
      " - Modelo: " +
      coches[i].modelo +
      " - Año de fabricación: " +
      coches[i].anyo +
      "<br>"
  );
}

function Coche(marca_in, modelo_in, anyo_in) {
  this.marca = marca_in;
  this.modelo = modelo_in;
  this.anyo = anyo_in;
}
var miCoche = new Coche("Peugeot", "206cc", "2003");
miCoche.color = "azul";

function Coche(marca_in, modelo_in, anyo_in) {
  this.marca = marca_in;
  this.modelo = modelo_in;
  this.anyo = anyo_in;
}
var miCoche = new Coche("Peugeot", "206cc", "2003");
miCoche.color = "azul";
var miCoche2 = new Coche("Peugeot2", "206cc", "2003");

function Concesionario(cod_oficina_in, ciudad_in, responsable_in) {
  this.cod_oficina = cod_oficina_in;
  this.ciudad = ciudad_in;
  this.responsable = responsable_in;
}

function Coche(marca_in, modelo_in, anyo_in, concesionario_in) {
  this.marca = marca_in;
  this.modelo = modelo_in;
  this.anyo = anyo_in;
  this.concesionario = concesionario_in;
}
var concesionario_atocha = new Concesionario("281", "Madrid", "Pedro Bravo");
var mi_coche = new Coche("Citroen", "C4", "2010", concesionario_atocha);

function imprimeDatos() {
  document.write("<br>Marca: " + this.marca);
  document.write("<br>Modelo: " + this.modelo);
  document.write("<br>Año: " + this.anyo);
}
function Coche(nombre_in, modelo_in, anyo_in) {
  this.marca = nombre_in;
  this.modelo = modelo_in;
  this.anyo = anyo_in;
  this.imprimeDatos = imprimeDatos;
}
var mi_coche = new Coche("Seat", "Toledo", "1999");
mi_coche.imprimeDatos();

