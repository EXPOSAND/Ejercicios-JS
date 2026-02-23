//Arrays multidimensionales en JavaScript - TEMA 4 - EJERCICIO 3

var palabras_espana = newArray(5); 
palabras_espana[0] = 'facebook'; palabras_espana[1] = 'tuenti'; palabras_espana[2] = 'youtube'; palabras_espana[3] = 'hotmail'; palabras_espana[4] = 'marca'; 
var palabras_suiza = new Array(5); 
palabras_suiza[0] = 'facebook'; palabras_suiza[1] = 'youtube'; palabras_suiza[2] = 'hotmail'; palabras_suiza[3] = 'google'; palabras_suiza[4] = 'blick'; 
var palabras_portugal = new Array(5); 
palabras_portugal[0] = 'facebook'; palabras_portugal[1] = 'youtube'; palabras_portugal[2] = 'hotmail'; palabras_portugal[3] = 'jogos'; palabras_portugal[4] = 'download'; 
var palabras_mas_buscadas = newArray(3); palabras_mas_buscadas[0] = palabras_espana; palabras_mas_buscadas[1] = palabras_suiza; palabras_mas_buscadas[2] = palabras_portugal; 
document.write("Primer elemento:"+ palabras_mas_buscadas[0][0]); document.write("<br/>Ultimo elemento:"+ palabras_mas_buscadas[2][4]);

var palabras_espana = new Array('facebook', 'tuenti', 'youtube', 'hotmail', 'marca'); 
var palabras_suiza = new Array('facebook', 'youtube', 'hotmail', 'google', 'blick'); 
var palabras_portugal = new Array('facebook', 'youtube', 'hotmail', 'jogos', 'download'); 
var palabras_mas_buscadas = new Array(palabras_espana, palabras_suiza, palabras_portugal); 
document.write("Primer elemento:" + palabras_mas_buscadas[0][0]); 
document.write("<br/>Ultimo elemento:" + palabras_mas_buscadas[2][4]);

var palabras_mas_buscadas = [ ['facebook', 'tuenti', 'youtube', 'hotmail', 'marca'], ['facebook', 'youtube', 'hotmail', 'google', 'blick'], ['facebook', 'youtube', 'hotmail', 'jogos', 'download'] ]; 
document.write("Primer elemento:" + palabras_mas_buscadas[0][0]); 
document.write("<br/>Ultimo elemento:" + palabras_mas_buscadas[2][4]);

document.write("<table border='1'>"); 
for (var i = 0; i < palabras_mas_buscadas.length; i++) { 
    document.write("<tr>"); 
    document.write("<td><b>Estado " + i + "</b></td>"); 
    for (var j = 0; j < palabras_mas_buscadas[i].length; j++) { 
        document.write("<td>" + palabras_mas_buscadas[i][j] + "</td>"); 
    } 
    document.write("</tr>"); } 
    document.write("</table>");
    