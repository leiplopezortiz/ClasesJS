// const mensaje=document.getElementById('mensaje');

// //PROPIEDAD classList
// //Sintaxis general: elemento.classList

// //obteniendo elemento DOM
// const elemento=document.getElementById('item1');

// // classList.length
// //Devuelve la cantidad de clases que tiene un elemento
// mensaje.innerHTML=`Cantidad de clases en el elemento: ${elemento.classList.length}`;

// //classList.item
// //Devuelve la clase en laposicion n de la lista de clases de un elemento

// mensaje.innerText=`Clase en la posicion 2 del elemento : ${elemento.classList.item(2)}`;

// //classList.contains
// //Devuelve true si la clase está presente y false si no lo está

// mensaje.innerText=`Existe la clase container en el item 1?: ${elemento.classList.contains('item')?"SI":"NO"}`;/*responde SI*/ 

// mensaje.innerText=`Existe la clase container en el item 1?: ${elemento.classList.contains('container')?"SI":"NO"}`; /*responde NO*/

// //classList.Add
// //Agrega una o mas clases a los atributos de clases de un elemento HTML

// elemento.classList.add('clase1','clase2');
// mensaje.innerHTML=`Clases en el item 1:${elemento.getAttribute('class')}`;

// const txtClase= document.getElementById('clase');
// const txtclaseNueva= document.getElementById('claseNueva');
// const btnAdd=document.getElementById('btnAdd');
// const btnRemove=document.getElementById('btnRemove');
// const btnToggle=document.getElementById('btnToggle');
// const btnReplace=document.getElementById('btnReplace');

// btnAdd.addEventListener('click',()=>{
//     elemento.classList.add(txtClase.value);
// });

// btnRemove.addEventListener('click',()=>{
//     elemento.classList.remove(txtClase.value);
// });

// btnToggle.addEventListener('click',()=>{
//     elemento.classList.toggle(txtClase.value);
//     mensaje.innerHTML=`Clases en el item 1:${elemento.getAttribute('class')}`;
// });
// /*con booleano, en true la agrega o no hace nada, false la quita o no hace nada*/
// btnToggle.addEventListener('click',()=>{
//     elemento.classList.toggle(txtClase.value,true);
//     mensaje.innerHTML=`Clases en el item 1:${elemento.getAttribute('class')}`;
// });

// btnReplace.addEventListener('click',()=>{
//     elemento.classList.replace(txtClase.value,txtclaseNueva.value);
//     mensaje.innerHTML=`Clases en el item 1:${elemento.getAttribute('class')}`;
// });


// //classList.remove
// //Quita una o mas clases a los atributos de clases de un elemento HTML
// elemento.classList.remove('fuente','borde');
// mensaje.innerHTML=`Clases en el item 1:${elemento.getAttribute('class')}`;

//classList.toggle
//Alterna la presencia de una clase en los atributos de clases de un elemento HTML

// elemento.classList.toggle('borde');

//contenido en el DOM


// mensaje.innerHTML=`Nombre del nodo: ${elemento.nodeName}`;
const mensaje=document.getElementById('mensaje');
const elemento=document.querySelector('#contenedor');


// //innerHTML
// //Devuelve o establece el contenido
// mensaje.innerText=`Contenido HTML: ${elemento.innerHTML}`;

// //Modificar el contenido
// elemento.innerHTML="<strong>Nuevo Texto</strong>";

// //Eliminar el contenido co cadenas vacias
// elemento.innerHTML='';

//Se debe tener cuidado, se puede agregar codigo malicioso con innerHTML, se puede usar conternerHTML en lugar de innerText para evitar ataques XSS

// //nodeName
// //Devuelve el nombre del nodo como una cadena de texto
// mensaje.innerText=`Nombre del nodo: ${elemento.nodeName}`;

// //TextContent
// //Devuelve el contenido de texto del elemento
// mensaje.textContent=`Contenido de texto del elemento: ${elemento.textContent}`;

// //Modificar el contenido de texto del elemento
// elemento.textContent="Nuevo Texto";

// //Eliminar el contenido de texto del elemento
// elemento.textContent='';

//outerText
//utiliza para obtener, modificar y eliminar el contenido de texto de un elemento dom y sus descendientes

// //devuelve el contenido
// mensaje.innerText=`Contenido de texto del elemento: ${elemento.outerText}`;

// // modifica el contenido
// elemento.outerText="Nuevo Texto";

// //elimina el contenido
// elemento.outerText='';

//outerHTML
//devuelve el codigo HTML que representa el elemento y sus descendientes

// //devuelve el contenido
// mensaje.innerText=`Contenido del elemento: ${elemento.outerHTML}`;

// // // // modifica el contenido
// // elemento.outerHTML="<strong>Nuevo Texto</strong>";
// // elemento.innerHTML='<strong>otro Texto</strong>';

// // //elimina el contenido
// elemento.outerHTML='';


//setHTML{}
//Es uuna forma segura de agregar HTML a un elemento en el DOM
//A diferencia de .innerHTML, que puede inyectar código malicioso, .setHTML() desinfecta el codigo HTML para que no contenga código JavaScript o cualquier otro código potelcialmente dañino

//elemento.setHTML(htmlCode, options);
//htmlCode:
//    Una cadena de texto que representa el código HTML que se agrega al elemento.

//options:Un objeto opcional que puede contener las siguientes propiedades:
//->danitize: Un valor booleano que indica si el codigo HTML debe desinfectarse (el valor predeterminado es true)
//->allowAttributes: Una matriz de nombres de atributos HTML que se permitiran en el codigo HTML
//(el valor predeterminado es una matriz vacia)

//modificar el contenido
elemento.setHTML('<strong>Nuevo Texto</strong>');