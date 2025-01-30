// // //********************EVENTOS*********************************** */
// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("consignacion").addEventListener("click",function(){
//         window.location.href="/html/consignacion.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("ingresar").addEventListener("click",function(){
//         window.location.href="/html/login.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("volver").addEventListener("click",function(){
//     window.location.href="../index.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("entrar").addEventListener("click",function(){
//     window.location.href="/html/menu.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("retiros").addEventListener("click",function(){
//     window.location.href="/html/retiros.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("serviciosPublicos").addEventListener("click",function(){
//     window.location.href="/html/serviciosPublicos.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("movimientos").addEventListener("click",function(){
//     window.location.href="/html/movimientos.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("regresar").addEventListener("click",function(){
//     window.location.href="/html/menu.html"
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("guardar").addEventListener("click",function(){
//     alert("¡Movimientos guardados con éxito!")
//     });
// });

document.addEventListener("DOMContentLoaded",function(){
    const btnRegistrar = document.getElementById("registrar");
    btnRegistrar.addEventListener("click", ()=>{
        const openDB = window.indexedDB.open('cuentas', 1);

        openDB.onupgradeneeded = ( init )=> {
        let cuentasDB = init.target.result;

        cuentasDB.onerror = () => {
        console.error('Error cargando la base de datos.');
        };

        let table = cuentasDB.createObjectStore('cuentas', { keyPath: 'numcuenta', autoIncrement:true });
        table.createIndex('numcuenta', 'numcuenta', { unique: true });
}});

    openDB.onerror = () => console.error('Error abriendo la base de datos');

    openDB.onsuccess = () => {
        console.log('Base de datos abierta!');
    };
/////////////////////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded",function()){
        const frmCrearCuenta=document.getElementById("frmCrearCuenta");
        const nombre=document.getElementById("nombre");
        const docu=document.getElementById("docu");
        const password=document.getElementById("password");

        function agregarCuenta(nombre, tipoDocumento, docu, password) {
            const openDB = window.indexedDB.open('cuentas', 1); 

            openDB.onsuccess = () => {
                let cuentasDB = openDB.result
                const transaction = cuentasDB.transaction(["cuentas"], "readwrite");
                const cuentasStore = transaction.objectStore("cuentas");
        
                const nuevaCuenta = { nombre, tipoDocumento, docu,password };
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
        };
            document.getElementById("consignacion").addEventListener("click",function(){
                window.location.href="/html/consignacion.html"
            });
});












