const mensaje= document.getElementById("mensaje");

function nuevo_item(id) {
    const div=document.createElement("div");
    div.textContent=`Item ${id} en el contenedor`;
    div.setAttribute("class","item borde fuente");
    div.setAttribute("id",`item${id}`);
    return div;    
}

//obteniendo elemento del DOM
const elemento=document.getElementById("contenedor");


// //appendChild(child)
// //Inserta un elemento nuevo como hijo de un elemento existente
// //El elemento nuevo se agrega al final de la lista de hijos del elemento

// let div = nuevo_item(4);
// elemento.appendChild(div);


// // replaceChild(new,old)
// //Remplaza un elemento hijo de un elemento por otro
// item=document.querySelector("#item1");
// div=nuevo_item(5);
// elemento.replaceChild(div,item);

//insrtBefore(new,node)
//Inserta un elemento nuevo antes de otro elemento
//Modificaciones al hijo de un elemento
item=document.querySelector("#item3");
// div=nuevo_item(6);
// // elemento.insertBefore(div,item);

// //Cuando el nodo es nulo agrega elemento al final
// div=nuevo_item(7);
// elemento.insertBefore(div, null);


//********************************************************************** 
/**************propiedades para modificar elementos*************/
//********************************************************************** 

// //before()
// //inserta contenido antes de un elemento seleccionado

// div=nuevo_item(8);
// elemento.before(div);

// //after()
// //Inserta contenido despues de un elemento seleccionado

// div=nuevo_item(9);
// elemento.after(div);

// //prepend()
// //Inserta contenido al rincipio de un elemento DOM
// div=nuevo_item(10);
// elemento.prepend(div);

// //append()
// //Inserta contenido al final de un elemento DOM
// div=nuevo_item(11);
// elemento.append(div);

// //replaceChildren()
// //Reemplaza todos los hijos de un elemento DOM con unos nuevos que se le indiquen
// div=nuevo_item(12);
// let div2=nuevo_item(13);
// elemento.replaceChildren(div,div2);

// // replaceWith()
// //Remplaza un elemento DOM con otro elemento DOM que yo seleccione
// // div=nuevo_item(14);
// // elemento.replaceWith(div);

// //remove()
// //Elimina el elemento que se selecciona
// elemento.remove();






//*************************************************************************
/************ PROPIEDADES DE INSERCION ADYACENTE, al lado************************** */
//*************************************************************************

//insertAdjacentElement(positivo, element);
//Inserta un elemento Dom nuevo en una posicion específica en relacion con el elemento que llama al metodo
//position: la posicion en la que se desea insertr el elemento nuevo puede ser 
//  beforebeginin: Elemento nuevo, se inserta antes del primer hijo del elemento que llama al metodo
// afterbeginin: Elemento nuevo, se inserta despues del primer hijo del elemento que llama al metodo
// beforeend: Elemento nuevo, se inserta antes del ultimo hijo del elemento que llama al metodo
// afterend: Elemento nuevo, se inserta despues del ultimo hijo del elemento que llama al metodo

// div= nuevo_item(15);
// elemento.insertAdjacentElement("beforebegin", div);

// div= nuevo_item(16);
// elemento.insertAdjacentElement("afterbegin", div);

// div= nuevo_item(17);
// elemento.insertAdjacentElement("beforeend", div);

// div= nuevo_item(18);
// elemento.insertAdjacentElement("afterend", div);

//insertAdjacentHTML(position, html);
//inserta HTML nuevo en una posicion especifica en relacion con el elemento que llama al metodo


// elemento.insertAdjacentHTML(
//     "beforebegin",
//     `<div id="item19" class="item borde fuente">Item 19 en el contenedor</div>`
// )

// elemento.insertAdjacentHTML(
//     "afterbegin",
//     `<div id="item20" class="item borde fuente">Item 20 en el contenedor</div>`
// )

// elemento.insertAdjacentHTML(
//     "beforeend",
//     `<div id="item21" class="item borde fuente">Item 21 en el contenedor</div>`
// )

// elemento.insertAdjacentHTML(
//     "afterend",
//     `<div id="item22" class="item borde fuente">Item 22 en el contenedor</div>`
// )

//insertAdjacentText(position, text)
//inserta texto nuevo en una posicion especifica en relacion con el elemento que llama al metodo
//beforebeginin
//afterbeginin
//beforeend
//afterend

// elemento.insertAdjacentText(
//     "beforebegin",
//     "Texto insertado con insertAdjacentText()"
// );

/************************************************************************** */
/****************** Negacion de elementos en el DOM ********************** */
/************************************************************************** */

// //Navegar por elementos
// elemento.children //Devuelve una lista de elementos HTML hijos
// console.log(elemento.children[1]);
// const nombres=["Maria" , "Juan", "Luis"];
// nombres.forEach((valor, indice) => {
//     elemento.children[indice].textContent=valor    
// });

// // elemento.children[1].textContent="Nuevo valor"
// elemento.parentElement //Devuelve el padre del elemento o si no tiene
// console.log(elemento.parentElement.setAttribute("style","boder:solid 10px green"));

elemento.firstElementChild //Devuelve el primer elemento hijo


elemento.lastElementChild // Devuelve el ultimo elemento hijo
const item2=document.getElementById("item2");
console.log(item2.previousElementSibling);
elemento.previousElementSibling//Devuelve el elemento hermano anterior


elemento.nextElementSibling//Devuelve el elemento hermano siguiente