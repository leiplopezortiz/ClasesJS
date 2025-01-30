const contenedor =document.getElementById("contenedor");

function inicializar(){
    for(const item of contenedor.children){
        item.setAttribute("onmouseover","resaltarItemMenu(event)");
        item.setAttribute("onmouseout","quitarResaltarMenu(event)")
        item.setAttribute("onclick","seleccionarItem(event)")
    };
}

function resaltarItemMenu(item) {
    item.target.classList.add("overItem");
}

function quitarResaltarMenu(item) {
    item.target.classList.remove("overItem");
}

function seleccionarItem(item){
    for(const hijo of item.target.parentElement.children){
        hijo.classList.remove("seleccionar");
    }    
    item.target.classList.add("seleccionar");
//.trim quita los espacios a los laterales
    switch(item.target.textContent.trim()){
        case "Crear Producto":
            moduloProducto();
            break;
        case "Agregar Producto a Stock":
            moduloAgregarProducto();
            break;
        case "Sacar producto a Stock":
            moduloSacarProducto();
            break;
    }
    if(item.target.textContent.trim() == "Crear Producto"){
        moduloProducto()
    }
}

inicializar();
