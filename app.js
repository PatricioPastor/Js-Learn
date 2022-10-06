
function Saludar(person){
    const caja = document.getElementById("notification");
    const elemento = document.createElement("div");
    elemento.innerHTML = `
        <div class="notification">
            <p>Welcome Back, ${person} 🤘</p>
            <span class="progress"></span>
        </div>
    `
    caja.appendChild(elemento);
}

document.getElementById("form-main").addEventListener("submit", function(e){
    e.preventDefault();
    const nombre = document.getElementById("name").value;
    Saludar(nombre);
})