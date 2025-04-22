const btnResaltar = document.getElementById("btn-resaltar");
const btnOcultar = document.getElementById("ocultar");
const parrafosSeleccionados = document.querySelectorAll(".parrafo");
btnResaltar.addEventListener("click",  () => {
parrafosSeleccionados.forEach(parrafo => {
    parrafo.classList.toggle("resaltado");
});
});

btnOcultar.addEventListener("click", function () {
parrafosSeleccionados.forEach(parrafo => {
    parrafo.classList.toggle("oculto");
});
});