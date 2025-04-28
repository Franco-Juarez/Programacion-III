const herramientas = document.querySelectorAll(".herramienta");
const negrita = document.getElementById("negrita");
const cursiva = document.getElementById("cursiva");
const subrayado = document.getElementById("subrayado");
const texto = document.getElementById("texto");
let color = document.getElementById("color");
let numero = document.getElementById("fuente");
let aplicar = document.getElementById("aplicar");

negrita.addEventListener("click", () => {
    texto.classList.toggle("bold");
});

cursiva.addEventListener("click", () => {
    texto.classList.toggle("italic");
});

subrayado.addEventListener("click", () => {
    texto.classList.toggle("underline");
});

aplicar.addEventListener("click", () => {
    texto.style.color = color.value;
    texto.style.fontSize = numero.value + "px";
});