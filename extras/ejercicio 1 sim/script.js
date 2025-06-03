const boton = document.getElementById("boton");

let colores = ["red", "blue", "green", "yellow", "purple", "orange"];

let colorActual = 0;

boton.addEventListener("click", function () {
    document.body.style.backgroundColor = colores[colorActual];
    colorActual++;
    if (colorActual >= colores.length) {
        colorActual = 0;
    }});