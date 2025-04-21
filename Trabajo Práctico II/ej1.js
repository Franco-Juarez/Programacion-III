const titulo = document.getElementById("tituloPrincipal");
titulo.innerHTML = "Nuevo Título";

const parrafos = document.getElementsByClassName("parrafo");
Object.values(parrafos).forEach((parrafo) => {
    parrafo.style.color = "blue";
})

console.log(parrafos)
console.log(Object.values(parrafos))

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
    item.innerText = item.innerText + " Hola";
})