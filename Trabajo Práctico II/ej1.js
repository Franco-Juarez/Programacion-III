const titulo = document.getElementById("tituloPrincipal");
titulo.innerHTML = "Nuevo Título";

const parrafos = document.getElementsByClassName("parrafo");
parrafos[0].style.color = "red";
parrafos[1].style.color = "blue";

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
    item.innerText = item.innerText + " Hola";
})