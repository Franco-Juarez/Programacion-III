const form = document.querySelector("form");
const input = document.getElementById("inputTexto");
const listaElementos = document.getElementById("lista");

form.addEventListener("submit", function (event) {
event.preventDefault();
const nuevoElemento = document.createElement("li");
nuevoElemento.innerHTML = ` 
    ${input.value}<button class="delete-btn">Borrar elemento</button>
`
listaElementos.appendChild(nuevoElemento);
input.value = "";
});

listaElementos.addEventListener("click", function (event) {
if (event.target.classList.contains("delete-btn")) {
    const li = event.target.parentElement;
    li.remove();
}
});
