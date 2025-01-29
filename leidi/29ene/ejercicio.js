const mensaje= document.getElementById("mensaje");

function nuevo_item(nombre) {
    const div=document.createElement("div");
    div.textContent=nombre;
    div.setAttribute("class","item borde fuente");
    div.setAttribute("id",nombre);
    return div;    
}

//obteniendo elemento del DOM
const elemento=document.getElementById("contenedor");

document.getElementById("btnAppend").addEventListener("click",()=>{
    elemento. appendChild(nuevo_item(document.querySelector("#persona1").value));
});

document.getElementById("btnPrepend").addEventListener("click",()=>{
    elemento. prepend(nuevo_item(document.querySelector("#persona1").value));
});

document.getElementById("btnReplace").addEventListener("click",()=>{
    let nombre=document.getElementById("persona1").value;
    const paraRemplazar=document.getElementById(nombre);
    // const p1=getElementById(getElementById("persona1").value);
    const p2=nuevo_item(document.querySelector("#persona2").value);
    // elemento. replaceWith(nuevo_item(document.querySelector("#persona2").value),p1);
    elemento.replaceChild(p2,paraRemplazar);
});

