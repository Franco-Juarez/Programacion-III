// COMPROBAR DATOS DEL FORMULARIO
const btnValidacion = document.getElementById("btnSubmit");
const form = document.querySelector("form");
btnValidacion.addEventListener("click", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;
    const nombreError = document.querySelector(".nombre-error");
    const emailError = document.querySelector(".email-error");
    const edadError = document.querySelector(".edad-error");

    // Validar nombre
    if (nombre === "" || email === "" || edad === "") {
        alert("Ningún campo puede estar vacío");
        throw new Error("Uno o más campos vacíos");
    }

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
        throw new Error("Nombre inválido");
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        emailError.textContent = "Formato de email inválido.";
        throw new Error("Formato de email inválido");
    }

    // Validar edad
    if (isNaN(edad) || edad < 18) {
        alert("Debes ser mayor de 18 años.");
        edadError.textContent = "Edad inválida. Debes ser mayor de 18 años.";
        throw new Error("Edad inválida");
    }

    alert("Formulario enviado correctamente.");

    if (nombreError) nombreError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (edadError) edadError.textContent = "";
    form.reset();
});