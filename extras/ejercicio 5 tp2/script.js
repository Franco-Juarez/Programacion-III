let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let edad = document.getElementById("edad");

let errorNombre = document.getElementById("errorNombre");
let errorEmail = document.getElementById("errorEmail");
let errorEdad = document.getElementById("errorEdad");

let Formulario = document.getElementById("formulario");

let boton = document.getElementById("enviar");

boton.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreValor = nombre.value;
    let emailValor = email.value;
    let edadValor = edad.value;
    let valido = true;

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombreValor === "") {
        errorNombre.textContent = "El nombre no puede estar vacío";
        valido = false;
    }else{
        errorNombre.textContent = "";
    }

    if (emailValor === "") {
        errorEmail.textContent = "El email no puede estar vacío";
        valido = false;
    }else if (!regexEmail.test(emailValor)) {
        errorEmail.textContent = "El email no es válido";
        valido = false;
    }
    else{
        errorEmail.textContent = "";
    }

    if (edadValor === "") {
        errorEdad.textContent = "La edad no puede estar vacía";
        valido = false;
    }else{
        errorEdad.textContent = "";
    }

    if (valido) {
        alert("Formulario enviado correctamente");
    }});