const btnEjemplo=document.querySelector("#ejemplo");
const divContenedor=document.querySelector("#contenedor");
const divNieto=document.querySelector("nieto")




// btnEjemplo.addEventListener("mouseover", event=>{
//     console.log(event);
// });

// btnSubmit.addEventListener("click",event=>{
//     event.preventDefault();
//     console.log(("No se envio la data",event.defaultPrevented));
// });

const miEvento=new CustomEvent("mi-evento",{
    detail:{
        number:1,
        name:"evento propio"
    },
    // bubbles:true
});

btnEjemplo.addEventListener("click",event=>{
    btnEjemplo.dispatchEvent(miEvento);
});

divContenedor.addEventListener("mi-evento",(event=>{
    console.log("Evento en el Abuelo");
}))

divContenedor.addEventListener("mi-evento",(event=>{
    console.log(event);   
    console.log("evento en el nieto");  
}, {capture: false, bubbles:true}))

