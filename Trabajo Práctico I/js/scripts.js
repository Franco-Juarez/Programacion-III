document.addEventListener("DOMContentLoaded", function() {
    // Dialog functionality
    const showButton = document.querySelector("#show-button");
    showButton.addEventListener("click", function () {
        const alertDialog = document.querySelector("#alert-dialog");
        alertDialog.showModal();
    });
});


// Carrusel
const carrusel = document.querySelector("#servicios-ul");
const antBtn = document.querySelector("#botonAnterior");
const sigBtn = document.querySelector("#sigBtn");
const anchoCard = document.querySelector(".card-exterior-li").offsetWidth;

let posicion = 0;

antBtn.disabled = true;

antBtn.addEventListener("click", function() {
    posicion -= (anchoCard + 40);
    console.log(posicion)
    if (posicion <= 8) {
        posicion = 0;
        antBtn.disabled = true;
    }
    sigBtn.disabled = false;
    
    carrusel.scrollTo({
        left: posicion,
        behavior: "smooth"
    });
});

sigBtn.addEventListener("click", function() {
    posicion += (anchoCard + 40);
    console.log(posicion)
    if (posicion > 0) {
        antBtn.disabled = false;
    }
    
    if (posicion >= anchoCard * 3) {
        posicion = anchoCard * 3 + 40 * 3;
        sigBtn.disabled = true;
    }
    
    carrusel.scrollTo({
        left: posicion,
        behavior: "smooth"
    });
});

// Modal!!

const mostrarModalBotones = document.querySelectorAll(".mostrar-modal");
mostrarModalBotones.forEach(btn => {
    btn.addEventListener("click", function() {
        const cardExt = btn.closest(".card-exterior");
        const modalCard = cardExt.querySelector(".modal-card");
        modalCard.showModal();
    })
})