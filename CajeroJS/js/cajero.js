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


        const frmCrearCuenta=document.getElementById("frmCrearCuenta");
        const nombre=document.getElementById("nombre");
        const docu=document.getElementById("docu");
        const password=document.getElementById("password");

        
    });