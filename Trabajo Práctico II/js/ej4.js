const form = document.getElementById("form");
const ulList = document.querySelector("ul");
const txtInput = document.getElementById("txtInput");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nuevaLi = document.createElement("li");
    nuevaLi.textContent = txtInput.value;
    ulList.appendChild(nuevaLi);
    txtInput.value = "";


    nuevaLi.addEventListener("click", () => {
        nuevaLi.classList.toggle("completado");
    })
})
