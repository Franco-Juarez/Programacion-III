const btnResaltar = document.getElementById("btnResaltar");
const btnOcultar = document.getElementById("btnOcultar");
const parrafos = document.querySelectorAll("p");

btnResaltar.addEventListener("click", () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.add("resaltado");

    })
})

btnOcultar.addEventListener("click", () => {
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle("oculto");
        
    })
})