const diOver = document.getElementById("cambiarFondo")
const texto = document.querySelector("#texto")
let i = 0;

diOver.setAttribute("onmouseover","ponerSombra()");
diOver.setAttribute("ondblclick","alert('hola')");
diOver.setAttribute("onclick","incrementar()");
texto.setAttribute("onchange", "replica()");

function ponerSombra(){
    diOver.classList.toggle("shadow");
}

function incrementar(){
    i++;
    diOver.textContent = `Conteo en ${i}`;
}

function replica(){
    diOver.textContent = texto.value
}