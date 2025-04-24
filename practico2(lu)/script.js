//Ejercicio 1-------------------------------------------------------------------

//cambio de titulo
let titulo = document.getElementById('tituloPrincipal');
titulo.textContent = "Trabajo Practico 2";

//cambio el color de los parrafos
let parrafos = document.getElementsByClassName("parrafo");

for (let parrafo = 0; parrafo < parrafos.length; parrafo++) {
    parrafos[parrafo].style.color = "blue";
}

//agrego texto a cada item
let contador = 1;

let lis = document.querySelectorAll('li');
lis.forEach(li => {
    li.textContent = `elemento numero ${contador}!`
    contador++
});

//Ejercicio 2-------------------------------------------------------------------

//evento del boton agregar
let agregar = document.querySelector(".agregar");
let contenedor2 = document.querySelector(".contenedor2");

agregar.addEventListener("click", () => {
    //capturo el valor del input
    let input = document.getElementById("miInput");
    let nombre = input.value;

    //creacion del li
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = `Se agrego a ${nombre}!`;

    //creacion boton eliminar
    let eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";

    eliminarBtn.addEventListener("click", () => {
        nuevoLi.remove();
    });

    //se elimina del grupo
    nuevoLi.appendChild(eliminarBtn);
    //se agrega al grupo
    contenedor2.appendChild(nuevoLi);
})

//Ejercicio 3-------------------------------------------------------------------

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


//Ejercicio 4-------------------------------------------------------------------

let formulario = document.getElementById("formulario");
let listaTareas = document.getElementById("listaTareas");
let input = document.getElementsByClassName("texto")[0];

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let tarea = input.value;

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea;

    nuevaTarea.addEventListener("click", () => {
        nuevaTarea.classList.add("completado");
    });

    listaTareas.appendChild(nuevaTarea);

    input.value = "";
});

//Ejercicio 5-------------------------------------------------------------------

let formulario2 = document.getElementById("formulario2");

formulario2.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let edad = document.getElementById("edad").value.trim();

    let errorNombre = document.getElementById("errorNombre");
    let errorEmail = document.getElementById("errorEmail");
    let errorEdad = document.getElementById("errorEdad");

    if (errorNombre) errorNombre.remove();
    if (errorEmail) errorEmail.remove();
    if (errorEdad) errorEdad.remove();
    let esValido = true;

    // Validar Nombre
    if (nombre === "") {
        esValido = false;
        let mensaje = document.createElement("p");
        mensaje.id = "errorNombre";
        mensaje.style.color = "red";
        mensaje.textContent = "El nombre es obligatorio.";
        document.getElementById("nombre").insertAdjacentElement('afterend', mensaje);
    }

    // Validar Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailRegex.test(email)) {
        esValido = false;
        let mensaje = document.createElement("p");
        mensaje.id = "errorEmail";
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor, ingresa un email válido.";
        document.getElementById("email").insertAdjacentElement('afterend', mensaje);
    }

    // Validar Edad
    if (edad === "" || isNaN(edad) || Number(edad) <= 18) {
        esValido = false;
        let mensaje = document.createElement("p");
        mensaje.id = "errorEdad";
        mensaje.style.color = "red";
        mensaje.textContent = "La edad debe ser un número mayor a 18.";
        document.getElementById("edad").insertAdjacentElement('afterend', mensaje);
    }

    // Si todos los campos son válidos, puedes continuar con el envío del formulario
    if (esValido) {
        alert("Formulario enviado correctamente.");
        formulario.reset();
        // Aquí puedes agregar el código para procesar el formulario, como enviarlo a un servidor
    }
});

