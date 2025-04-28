const form = document.getElementById("form");
const input = document.getElementById("email");
const errorElement = document.getElementById("error");
const boton = document.getElementById("boton");
let mensajeError = document.getElementsByClassName("error");

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

boton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = input.value.trim();
  if (emailValue === "") {
    errorElement.innerText = "El campo no puede estar vacío";
    errorElement.style.display = "block";
    input.classList.add("error");
  } else if (!regex.test(emailValue)) {
    errorElement.innerText = "El correo electrónico no es válido";
    errorElement.style.display = "block";
    input.classList.add("error");
  } else {
    errorElement.style.display = "none";
    input.classList.remove("error");
    alert("Correo electrónico válido: " + emailValue);
  }
});

