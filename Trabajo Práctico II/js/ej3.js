//obtengo los botones y los parrafos
let resaltarBtn = document.getElementById("resaltarBtn");
let ocultarBtn = document.getElementById("ocultarBtn");
let parrafos2 = document.querySelectorAll(".parrafo2");

//creo los eventos
resaltarBtn.addEventListener("click", () => {
    parrafos2.forEach(p => {
        p.classList.toggle("resaltado")
        if (p.classList.contains("resaltado")) {
            resaltarBtn.textContent = "Limpiar";
        } else {
            resaltarBtn.textContent = "Resaltar";
        }
    });
});

ocultarBtn.addEventListener("click", () => {
    parrafos2.forEach(p => {
        p.classList.toggle("oculto")
        if (p.classList.contains("oculto")) {
            ocultarBtn.textContent = "Mostrar";
        } else {
            ocultarBtn.textContent = "Ocultar";
        }
    });

});