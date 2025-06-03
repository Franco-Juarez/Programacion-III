let contador = document.getElementById("contador");
let suma = document.getElementById("sumar");
let resta = document.getElementById("restar");
let reiniciar = document.getElementById("reiniciar");
//Crea una página con un contador visible. Debajo, tres botones: uno para sumar, otro para restar y otro para reiniciar. El número debe actualizarse en pantalla cada vez que se presione un botón. Estiliza correctamente el diseño.
let valor = 0;

suma.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

resta.addEventListener("click", () => {
    if (valor > 0) {
        valor--;
        contador.textContent = valor;
    }
});

reiniciar.addEventListener("click", () => {
    valor = 0;
    contador.textContent = valor;
} );

