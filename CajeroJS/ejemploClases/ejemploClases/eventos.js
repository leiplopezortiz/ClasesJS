const divOver=document.getElementById("cambiarFondo");
const texto=document.querySelector("#texto");
let i=0;

divOver.setAttribute("onmouseover", "ponerSombra()");
divOver.setAttribute("ondblclick","alert('Hola')");
divOver.setAttribute("onclick", "incrementar()");
texto.setAttribute("onchange","replicar()");
texto.setAttribute("onkeydown","replicar()")

function ponerSombra() {
    divOver.classList.toggle("shadow");    
}

function incrementar(){
    i++;
    divOver.textContent=`Conteo en ${i}`;
}

function replicar(){
    divOver.textContent = texto.value
}

