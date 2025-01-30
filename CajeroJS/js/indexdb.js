function initDB() {
    const openDB = window.indexedDB.open('bancos', 1);

    openDB.onupgradeneeded = (init) => {
        let bancosDB = init.target.result;

        bancosDB.onerror = () => {
            console.error('Error cargando la base de datos.');
        };

        let table = bancosDB.createObjectStore('cuentas', { keyPath: 'numCuenta' });
        table.createIndex('numCuenta', 'numCuenta', { unique: true });
        table.createIndex('docu', 'docu', { unique: true });

    };

    openDB.onerror = () => console.error('Error abriendo la base de datos');

    openDB.onsuccess = () => {
        console.log('Base de datos abierta!');
    };
};

initDB();