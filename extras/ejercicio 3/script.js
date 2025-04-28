const herramientas = document.querySelectorAll(".herramienta");
const negrita = document.getElementById("negrita");
const cursiva = document.getElementById("cursiva");
const subrayado = document.getElementById("subrayado");
const texto = document.getElementById("texto");
let color = document.getElementById("color");
let numero = document.getElementById("number");
let aplicar = document.getElementById("aplicar");

negrita.addEventListener("click", () => {
    texto.style.fontWeight = "bold";
});