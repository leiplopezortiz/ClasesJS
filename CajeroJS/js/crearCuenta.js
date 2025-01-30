document.getElementById("volver").addEventListener("click", function () {
    window.location.href = "../index.html"
});

document.getElementById("registrar").addEventListener("click", function () {
    const frmDatos = new FormData(
        document.getElementById("frmCrearCuenta")
    );
    agregarCuenta(frmDatos.get("nombre"), frmDatos.get("tipoDocumento"), frmDatos.get("docu"), frmDatos.get("password"));
    // window.location.href = "../index.html"
});


function agregarCuenta(nombre, tipoDocumento, docu, password) {
    const openDB = window.indexedDB.open('bancos', 1);

    openDB.onsuccess = () => {
        let bancosDB = openDB.result
        const transaction = bancosDB.transaction(["cuentas"], "readwrite");
        const cuentasStore = transaction.objectStore("cuentas");
        const numCuenta = generarNumCuenta();
        const nuevaCuenta = { numCuenta: 1629, nombre, tipoDocumento, docu, password, movimientos: [] };
        // const agregarRequest = cuentasStore.add(nuevaCuenta);

        // Para actualizar una cuenta
        // const nuevaCuenta = { numCuenta, nombre, tipoDocumento, docu, password, movimientos: [] };
        // const agregarRequest = cuentasStore.put(nuevaCuenta);

        // agregarRequest.onsuccess = () => {
        //     console.log("Cuenta agregada correctamente");
        // };

        // agregarRequest.onerror = (error) => {
        //     if (error.target.error.name == "ConstraintError")
        //         console.log("Error: La cuenta ya está registrada.");
        //     else
        //         console.log("Error desconocido.", error.target.error.name);
        // };

        obtenerCuentas()
    };
};


function obtenerCuentas() {
    const openDB = window.indexedDB.open('bancos', 1);
    openDB.onsuccess = () => {
        let bancosDB = openDB.result
        const transaction = bancosDB.transaction(["cuentas"], "readonly");
        const cuentasStore = transaction.objectStore("cuentas");
        const cuentas = cuentasStore.getAll();
        cuentas.onsuccess = () => {
            console.log("Todos las cuentas:", cuentas.result);
        };
    }
}


function generarNumCuenta() {
    return Math.floor(Math.random() * 9999)
}