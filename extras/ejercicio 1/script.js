let horas = 0;
let minutos = 0;
let segundos = 0;

const display = document.querySelector("#display");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

function actualizarDisplay() {
    const horasStr = horas.toString().padStart(2, '0');  // Formatea las horas
    const minutosStr = minutos.toString().padStart(2, '0');  // Formatea los minutos
    const segundosStr = segundos.toString().padStart(2, '0');  // Formatea los segundos
    display.textContent = `${horasStr}:${minutosStr}:${segundosStr}`; // Actualiza el display
  };

// Función para iluminar el display con el color del botón
function iluminarDisplay(color) {
    display.style.transition = "color 0.5s ease"; // Añade transición suave
    display.style.color = color; // Cambia el color de los números
    setTimeout(() => {
        display.style.color = "hsl(288, 37%, 73%)"; // Vuelve al color original después de 1 segundo
    }, 1000);
};
stop.disabled = true;
reset.disabled = true;

stop.disabled = true; // Desactiva el botón de detener
reset.disabled = true; // Desactiva el botón de reiniciar

start.addEventListener("click", () => {

    start.disabled = true; // Desactiva el botón de inicio
    stop.disabled = false; // Activa el botón de detener
    reset.disabled = false; // Activa el botón de reiniciar

    iluminarDisplay("#88e076"); // Ilumina con verde cuando presionas "Iniciar"

    interval = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        actualizarDisplay();
    }, 1000);
});

stop.addEventListener("click", () => {
    start.disabled = false; // Activa el botón de inicio
    stop.disabled = true; // Desactiva el botón de detener
    reset.disabled = false; // Activa el botón de reiniciar

    iluminarDisplay("#e07676"); // Ilumina con rojo cuando presionas "Detener"

    clearInterval(interval); // Detiene el cronómetro

    
});

reset.addEventListener("click", () => {
    start.disabled = false; // Activa el botón de inicio
    stop.disabled = true; // Desactiva el botón de detener
    reset.disabled = true; // Desactiva el botón de reiniciar

    iluminarDisplay("#76b9e0"); // Ilumina con azul cuando presionas "Reiniciar"

    clearInterval(interval); // Detiene el cronómetro
    horas = 0; // Reinicia las horas
    minutos = 0; // Reinicia los minutos
    segundos = 0; // Reinicia los segundos
    actualizarDisplay(); // Actualiza el display
});