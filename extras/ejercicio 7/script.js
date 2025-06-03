const start = document.getElementById("start");
const stop = document.getElementById("stop");

//Cambiar el color de fondo de 5 colores predefinidos una vez por segundo, iniciar el ciclo con un boton llamado iniciar y pausarlo con uno llamado detener.//

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];

let interval; // Variable para almacenar el intervalo
start.addEventListener("click", () => {
    start.disable = true;
    stop.disable = false;

    let index = 0;
    interval = setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Cambia al siguiente color
    }, 1000);});

stop.addEventListener("click", () => {
    start.disable = false;
    stop.disable = true;
    clearInterval(interval); // Detiene el ciclo de colores
} );
    
    