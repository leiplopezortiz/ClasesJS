const modulo =document.getElementById("modulo");

function moduloProducto(){
    modulo.innerHTML=`
        <form id="frmProducto">
            <input type="text" name="codigo" id="codigo" placeholder="codigo">
            <input type="text" name="nombre" id="nombre" placeholder="nombre">
            <input type="text" name="proveedor" id="proveedor" placeholder="proveedor">
        </form>
        <button id="btnGuardarProducto">Guardar Producto</button>
    `

    document.getElementById("btnGuardarProducto").addEventListener("click",()=>{
        const frmProducto=new FormData(document.getElementById("frmProducto"));
        alert(frmProducto.get("codigo"));
    })
}

// crearProductoFrm()

function moduloAgregarProducto() {
    modulo.innerText="Modulo AgregarProducto"   
}


function moduloSacarProducto() {
    modulo.innerText="Modulo Sacar Producto"   
}