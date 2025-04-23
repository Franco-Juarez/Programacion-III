const btnAgregar = document.getElementById("btnAgregar");
const ulList = document.getElementById("ul-list");

btnAgregar.addEventListener("click", () => {
    const txtInputValue = document.getElementById("txtInput").value;

    const nuevaLi = document.createElement("li");
    nuevaLi.textContent = txtInputValue;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        ulList.removeChild(nuevaLi);
    });

    nuevaLi.appendChild(botonEliminar);
    ulList.appendChild(nuevaLi);
    

})