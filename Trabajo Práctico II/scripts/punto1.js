const titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Título modificado desde JavaScript";

const parrafos = document.getElementsByClassName("parrafo");
for(let i = 0; i < parrafos.length; i++) {
    // Pintó jugar con el color de los parrafos y los números pares
    if (i % 2 === 0) {
        parrafos[i].style.color = "blue";
    } else {
        parrafos[i].style.color = "red";
    }
}

const lista = document.querySelectorAll("li");
lista.forEach(item => {
  const texto = document.createElement("p");
  texto.textContent = "Texto añadido a cada elemento de la lista";
  item.appendChild(texto)
});