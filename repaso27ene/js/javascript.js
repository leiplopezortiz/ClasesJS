// const mensaje = document.getElementById('mensaje');
// const contenedor =document.getElementById('contenedor');

// const promesa1=new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         const productos = [
//             {id:1, nombre: 'arroz', proveedor: 'Diana'},
//             {id:2, nombre: 'café', proveedor: 'Aguila Roja'},
//             {id:3, nombre: 'azucar', proveedor: 'Riopaila'}
//         ];
//         //resolve(productos);
//         reject('No hay datos!')
//     },4000)
// });

// //se cumple la promesa
// promesa1.then((productos) => {
//     let prd="";
//     productos.forEach(prod => {
//         prd+=`<div class="item"><strong>Código</strong> ${prod.id} |<strong>Nombre</strong> ${prod.proveedor} |<strong>Proveedor</strong> ${prod.id}</div>`;
//     });
//     contenedor.innerHTML=prd;
// })
// .catch((error)=>{
//     mensaje.innerText="Error: "+error;
// });

//************************************************************************************************************************************************ */

// const mensaje = document.getElementById('mensaje');
// const contenedor = document.getElementById('contenedor');
// const boton = document.getElementById('boton');

// boton.addEventListener('click', () => {
//     cargarDatos();
// });

// //await solo se puede usar en funciones asincronas
// async function cargarDatos(){
//     // mensaje.innerText="Prueba!";
//     const datosAPI = await fetch('https://jsonplaceholder.typicode.com/todos');
//     datosAPI.json().then((datos) => {
//         let html ="";    
//         datos.forEach(tarea => {
//             html+=`<div class="item">
//             <p><strong>id: </strong> ${tarea.id}</p>
//             <p><strong>title: </strong> ${tarea.title}</p>            
//             <p><strong>completed: </strong> ${tarea.completed ? "SI":"NO"}</p>
//             </div>`
//         });
//         contenedor.innerHTML=html;
//     })
//     //se puede omitir el parrentesis siempre y cuando se tenga solo un argumento o parametro
//     //? sirve para evaluar una condicion
//     .catch(error => {"Error: "+error});
//     // console.log(datosAPI);
//     //va a esperar a que la promesa se resuelva y devuelva un valor
// }

// //satatus: 200 es que la petición se ha completado satisfactoriamente

/* -------------------------------------------------------------------------------------------------------*/

// INDEXDC PARA ALMACENAR DATA QUE QUERAMOS QUE PERDURE, PARECIDO A UN ALMACENAMIENTO DE DATOS, ALMACENA OBJETOS, MANEJA TABLAS->OBJECTSTORE
// la version permite agregar y usar versiones anteriores

// siempre se debe manejar errores para que no se crashee y para informar al usuario

// function initDB(){
//     const openDB= window.indexedDB.open('inventario', 1);

//     openDB.onupgradeneeded = (init)=>{
//         let inventarioDB =init.target.result;

//         inventarioDB.oneerror = () => {
//             console.error("Error cargando la base de datos");
//     };
//     let table =inventarioDB.createObjectStore('productos', {keyPath: 'id',autoIncrement: true});
//     table.createIndex('codigo', 'codigo', {unique: true});
//     };
//     openDB.onerror=()=>console.error("Error abriendo la base de datos");

//     openDB.onsuccess = () => {
//         console.log("Base de datos abierta!");
//     };
// };

// function agregarProducto(codigo, nombre, proveedor){
//     const openDB = window.indexedDB.open('inventario', 1);
//     openDB.onsuccess=()=>{
//         let inventarioDB=openDB.result;
//         const transaction= inventarioDB.transaction(['productos'], 'readwrite');
//         constproductosStore=transaction.objectStore('productos');

//         const nuevoProducto={codigo, nombre, proveedor};
//         const agregarRequest= productosStore.add(nuevoProducto);

//         agregarRequest.onsuccess=()=>{
//             console.log("producto agregado correctamente!");
//         };
//         agregarRequest.onerror=(error)=>{
//             if(error.target.error.name==='ConstraintError')
//             console.error("Error: El código del producto ya está registrado!");
//             else
//             console.log("Error desconocido: ", error.target.error.name);
//         };
//     };
// };


/*-----------------------------------------------------------*/

const btnGuardar = document.getElementById('btnGuardar');
const frmProducto = document.getElementById('#frmProducto');

btnGuardar.addEventListener('click', () => {
    const frmData =new FormData(frmProducto);
    console.log(frmData);
    agregarProducto(frmData.get('codigo'), frmData.get('nombre'), frmData.get('proveedor')  );
});

function initDB(){
    const openDB= window.indexedDB.open('inventario', 1);

    openDB.onupgradeneeded = (init)=>{
        let inventarioDB =init.target.result;

        inventarioDB.oneerror = () => {
            console.error("Error cargando la base de datos");
    };
    let table = inventarioDB.createObjectStore('productos', {keyPath: 'id',autoIncrement: true});
    table.createIndex('codigo', 'codigo', {unique: true});
    };
    openDB.onerror=()=>console.error("Error abriendo la base de datos");

    openDB.onsuccess = () => {
        console.log("Base de datos abierta!");
    };
};