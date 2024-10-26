// Juego de preguntas

let ingresar = confirm('¿Quieres jugar?');
let tiempo = document.querySelector('#tiempo');
let quizzCont = document.querySelector('#quizCont');
let comenzar;
let jugadores = [];
let variablePuntaje = 0;

 if (ingresar === true) {
     agregarJugador();
quizzCont.disabled=true;

}

function iniciarTemporizador() {
     tiempo.innerText = 'Tienes 1 minuto para contestar las preguntas.';
   quizzCont.disabled=false;  
    setTimeout(() => {
        tiempo.innerText = '¡Tiempo terminado!';
        verificarRespuestas();
        quizzCont.disabled=true;
      
     }, 60000);
 }

function agregarJugador() {
     let nombre = prompt("Por favor, ingresa tu nombre");
     let puntaje = 0;
     let cantidadDeTurnos = 0;
     let jugador = { nombre: nombre, puntaje: puntaje, cantidadDeTurnos: cantidadDeTurnos };
    jugadores.push(jugador);
    
     comenzar = confirm('¿Estás listo para comenzar ahora?');
    
     if (comenzar) {
        iniciarTemporizador();
    }
}

let respuestasCorrectas = {
    preg1: "op2", 
    preg2: "op3", 
    preg3: "op2", 
    preg4: "op2", 
    preg5: "op1", 
    preg6: "op1", 
    preg7: "op2", 
    preg8: "op3", 
    preg9: "op2", 
    preg10: "op2"
};

function verificarRespuestas() {
for (let i = 1; i <= 10; i++) {
 let respuesta = document.querySelector(`input[name="preg${i}"]:checked`);
        if (respuesta && respuesta.value === respuestasCorrectas[`preg${i}`]) {
         variablePuntaje++;
       } else {
           variablePuntaje--;
         }
}
alert(`Tu puntaje es: ${variablePuntaje}`);
    
// Botón de reinicio del juego
document.querySelector('#reiniciarJuego').addEventListener('click', function() {
    location.reload();
 });

 }
 //funcion para guardar puntajes en localStorage
function guardarPuntajes (nombre1, puntaje1, puntaje2){
let puntuaciones = JSON.parse (localStorage.getItem ('puntuaciones')) || [];
puntuaciones.push ({ nombre1, puntaje1,});
localStorage.setItem ('puntuaciones', JSON.stringify (puntuaciones));
         }
