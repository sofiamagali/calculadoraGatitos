var num1=Number;
var num2=Number;
var operacion;

function iniciar(){
    alert('Bienvenid@ a la Michicalculadora')
    //Operaciones
    var resultado = document.getElementById('resul');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    // NUMEROS

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }  

    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }  

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }  

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }  

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }  

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }  

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }  

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }  

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }  

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }  

    // Operaciones

    
    reset.onclick = function(e){
        resultado.textContent = "";
        num1= 0;
        num2= 0;
        operacion = "";
        }  

    suma.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }  

    resta.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }  

    multiplicacion.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }  

    division.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "/";
        resultado.textContent = "";
        limpiar();
    }  

    igual.onclick = function(e){
        num2 = resultado.textContent;
        resolver();
    }  

    
  // fin iniciar

  function limpiar(){
    resultado.textContent= " ";
  }

  function resetear(){
    resultado.textContent = "";
    num1= 0;
    num2= 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseInt(num1) + parseInt(num2);
        break;
      case "-":
          res = parseInt(num1) - parseInt(num2);
          break;
      case "*":
        res = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        res = parseInt(num1) / parseInt(num2);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
}
var bleep = new Audio(src="gato.mp3");
bleep.src = "gato.mp3";
function loadContent(num){
    bleep.play(src="gato.mp3"); // Play button sound now
    var div1 = document.getElementById("div1");

}