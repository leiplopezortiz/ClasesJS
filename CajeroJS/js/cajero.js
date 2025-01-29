const btnGuardar = document.getElementById("btnGuardar");
const frmConsignacion = document.querySelector("#formulario")

document.addEventListener("DOMContentLoaded",function(){
    btnGuardar.addEventListener("click", ()=>{
        const frmData = new FormData(frmConsignacion);
        agregarProducto(frmData.get("numcuenta"), frmData.get("numconsig"), frmData.get("valor"));
    })
    
    function initDB(){
        const openDB = window.indexedDB.open('cuentas', 1);
    
        openDB.onupgradeneeded = ( init )=> {
        let cuentasDB = init.target.result;
    
        cuentasDB.onerror = () => {
        console.error('Error cargando la base de datos.');
        };
    
        let table = cuentasDB.createObjectStore('cuentas', { keyPath: 'numcuenta', autoIncrement:true });
        table.createIndex('codigo', 'codigo', { unique: true });
    
    };
    
    openDB.onerror = () => console.error('Error abriendo la base de datos');
    
    openDB.onsuccess = () => {
        console.log('Base de datos abierta!');
    };
    }
    
    function agregarCuenta(numcuenta, numconsig, valor) {
    const openDB = window.indexedDB.open('cuentas', 1);
    openDB.onsuccess = () => {
        let cuentasDB = openDB.result
        const transaction = cuentasDB.transaction(["cuentas"], "readwrite");
        const cuentasStore = transaction.objectStore("cuentas");
    
        const nuevaCuenta = { numcuenta, numconsig, valor };
        const agregarRequest = cuentasStore.add(nuevaCuenta);
    
        agregarRequest.onsuccess = () => {
        console.log("Cuenta agregada correctamente");
        };
    
        agregarRequest.onerror = (error) => {
        if(error.target.error.name == "ConstraintError")
            console.log("Error: La cuenta ya está registrada.");
        else
            console.log("Error desconocido.", error.target.error.name);
        };
    };
    };
    document.getElementById("consignacion").addEventListener("click",function(){
        window.location.href="/html/consignacion.html"
    });
});

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("retiro").addEventListener("click",function(){
        window.location.href="/html/login.html"
    });
});

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("servpublico").addEventListener("click",function(){
        window.location.href="/html/login.html"
    });
});

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("movimientos").addEventListener("click",function(){
        window.location.href="/html/login.html"
    });
});

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("volver").addEventListener("click",function(){
    window.location.href="../index.html"
    });
});





