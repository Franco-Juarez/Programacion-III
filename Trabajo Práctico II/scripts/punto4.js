// FORMULARIO DE TODO LIST
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("inputTarea");
const todoList = document.getElementById("todo");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = ` 
    <span class="completar" style="display:flex; gap: 10px; cursor: pointer">${todoInput.value}</span>
  `
  todoList.appendChild(nuevaTarea);
  todoInput.value = "";
});

// Agregar evento de clic a cada elemento de la lista de tareas
todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("completar")) {
    event.target.classList.toggle("completada");
  }
});
