let nombre = document.getElementById("nombre");
let boton = document.getElementById("boton");

let error = document.getElementById("error");


boton.addEventListener("click", function (evento) {
    evento.preventDefault();
    if (nombre.value == "") {
        error.style.color = "red";
        error.textContent = "El campo nombre no puede estar vacío";
    }else{
        error.textContent = "";
        alert("enviado con exito");
    }});

    