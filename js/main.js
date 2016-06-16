$(document).ready(function(){
  console.log("Hola :D");
});

var turno = 1; 
var movimiento; 
var arregloTictac = new Array(9);
//getElementsByClassName manda traer todas las clases con el mismo nombre
//getElementById manda llamar el ID
//getElementByTagName lo hace con las etiquetas
var celdas = document.getElementsByClassName("tictac")

function ganador (letra){
  if (
        (arregloTictac[0]==letra && arregloTictac[1]==letra && arregloTictac[2]==letra) ||
        (arregloTictac[3]==letra && arregloTictac[4]==letra && arregloTictac[5]==letra) || 
        (arregloTictac[6]==letra && arregloTictac[7]==letra && arregloTictac[8]==letra) ||
        (arregloTictac[0]==letra && arregloTictac[3]==letra && arregloTictac[6]==letra) ||
        (arregloTictac[1]==letra && arregloTictac[4]==letra && arregloTictac[7]==letra) ||
        (arregloTictac[2]==letra && arregloTictac[5]==letra && arregloTictac[8]==letra) ||
        (arregloTictac[0]==letra && arregloTictac[4]==letra && arregloTictac[8]==letra) ||
        (arregloTictac[2]==letra && arregloTictac[4]==letra && arregloTictac[6]==letra)
    ) {
    alert("Jugador "+letra+" gana!");
    window.location.reload();
  };
};

function gato (evento){
  var celda = evento.target;
  var idCelda = evento.target.id;
  //Para identificar las celdas
  var celdaJuagada = idCelda[6]-1;
  //Para evaluar las celdas pares
  movimiento = turno%2;
  //Para poner las X cuando sea un turno par
  if (movimiento!=0) {
    celda.innerHTML = "X";
    //Para darle estilo a las celdas 
    celda.style.background = "#015B69";
    arregloTictac[celdaJuagada] = "X";
    //Para mostrar al ganador
    ganador("X");
    //Para poner las O en los turnos impares
  } else {
    celda.innerHTML = "O";
    //Para darle estilo a las celdas 
    celda.style.background = "#015B69";
    arregloTictac[celdaJuagada] = "O";
    //Para mostrar al ganador
    ganador("O");
  };

  if (turno==9) {
    alert("Es un empate");
    //Para recargar la página
    window.location.reload();
  } else {
    turno++;
  };
};

function cargarDoc (){
  //document.getElementsByClassName("tictac").addEventListener("click",gato);
  var n=0;
  while(n<celdas.length){
    celdas[n].addEventListener("click",gato);
    n++;
  } //cada vuelta que da el contador es una iteración
};

//Eventos 
window.addEventListener("load",cargarDoc);