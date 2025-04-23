const nombreInput = document.getElementById("nombreInput");
const emailInput = document.getElementById("emailInput");
const edadDiv = document.getElementById("edadDiv");
const emailDiv = document.getElementById("emailDiv");
const nombreDiv = document.getElementById("nombreDiv");
const edadInput = document.getElementById("edadInput");
const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("form");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mostrarErrores(campo, mensaje){
    const error = document.createElement("p");
    error.innerText = mensaje;
    error.classList.add("error");
    campo.appendChild(error);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.remove());

    let error = false;

    if(nombreInput.value === ""){
        mostrarErrores(nombreDiv, "El nombre es obligatorio");
        error = true;
    }

    if(emailInput.value === ""){
        mostrarErrores(emailDiv, "El email es obligatorio");
        error = true;
    }else if (!emailRegex.test(emailInput.value)){
        mostrarErrores(emailDiv, "El email no es válido");
        error = true;
    }

    if(edadInput.value === ""){
        mostrarErrores(edadDiv, "La edad es obligatoria");
        error = true;
    }else if(edadInput.value < 18){
        mostrarErrores(edadDiv, "La edad no puede ser menos de 18");
        error = true;
    }

    if(!error){
        form.submit();
    }
})