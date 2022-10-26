let userId=25801;
let url=`https://japceibal.github.io/emercado-api/user_cart/${userId}.json`;
let itemsDefault=[];
let subTotal;
let iD= localStorage.getItem("idObjeto");
/* let stringComprado= localStorage.getItem(`${localStorage.getItem("idObjeto")}`); */
let arrayCompras; 
let idsUsadas=[];
let y;
let id;
let cantidad50924;
let cantidad;
let nuevaCantidad;


//Pruebo xa desfiate
let ids;//Creo el array ids, al cual le pasaremos todos los ids que recibamos(Con el objetivo de poder comparar nuevos y viejos) 
ids=iD;
console.log(ids);

if(ids==null){}
else if (ids!=localStorage.getItem("ids")) {
   let agregar =[localStorage.getItem("ids")]  
    agregar.push(ids)
    localStorage.setItem("ids",agregar);//Recordar que el array agregar , se va al local como string , debemos volverlo nuevamente array con split()
}/* else{
   let agregar =[localStorage.getItem("ids")]  
    agregar.push(ids)
    localStorage.setItem("ids",agregar); 
} */

//Termino de probar xa desafiate

/* 
console.log(arrayCompras) */


function traerItems() {
    fetch(url)
    .then(response=>response.json())
    .then(data=>itemsDefault.push(data))
    .then(agregarHtml)
    .then(agregarProductos)
}


//Hay que cambiarla
function mostrar(valor){ //función xa mostrar valor del primer objeto
    if (valor>1) {
        subTotal=parseInt(valor)* subTotal
    }else{subTotal=itemsDefault[0].articles[0].unitCost;}
    document.getElementById(`columnaUltima${id}`).innerHTML=`USD ${subTotal}`;
}

function agregarCantidad(valor,id,subTotal,moneda){//función xa mostrar valor del resto de objetos
    console.log("Este es el sub-total que recibe como parámetro---------------------",subTotal);
   console.log(document.getElementById(`cantidadItems${id}`).value) 
if (valor>1) {
  nuevaCantidad=parseInt(valor);
  document.getElementById(`cantidadItems${id}`).value=nuevaCantidad; 
  
  SubTotal(valor,id,subTotal,moneda);   
}
else if(valor<0){alert("Ingrese un valor válido")} 

else {SubTotal(1,id,subTotal,moneda);}
}

function SubTotal(valor,id,subTotal,moneda) {  //Creo la función para calcular el subtotal
    if (valor>=1) {
        subTotal=parseInt(valor)* subTotal; 
         console.log("PASA X ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",subTotal); 
         document.getElementById(`cantidadItems${id}`).value.innerHTML++;
         document.getElementById(`cantidadItems${id}`).value.innerHTML=document.getElementById(`cantidadItems${id}`).value;
    }else{subTotal}
    document.getElementById(`columnaSubtotal${id}`).innerHTML=`${moneda} ${subTotal}`;
} 


function agregarHtml() {

id=itemsDefault[0].articles[0].id;

document.getElementById("contenedorItems").innerHTML+="";

 for (let i= 0; i < itemsDefault.length; i++) {



    subTotal=itemsDefault[i].articles[i].unitCost;
    console.log(subTotal);

 let agregarAHtml =`
        <tr>
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${itemsDefault[i].articles[i].image}></th>
         <td class="text-center"><p class="centrado">${itemsDefault[i].articles[i].name}</p></td>
         <td class="text-center"><p class="centrado">USD ${itemsDefault[i].articles[i].unitCost}</p></td> 
         <td class="text-center"><input onkeyup="agregarCantidad(this.value,${itemsDefault[0].articles[0].id},${itemsDefault[0].articles[0].unitCost},'${itemsDefault[0].articles[0].currency}')" class="input text-center" id="cantidadItems${id}" type="text" placeholder=1 value=1 min=1 step="1"></td>
         <td  class="text-center"><p class="centrado fw-bold" id="columnaSubtotal${id}">USD </p></td>`

         document.getElementById(`contenedorItems`).innerHTML=agregarAHtml;//agregamos lo q tenemos hasta ahora al html
         subTotal=parseInt(document.getElementById(`cantidadItems${id}`).value)*(subTotal);//Calculamos el subtotal

let agregarAHtml2=`${subTotal}` //Definimos una variable con el valor q calculamos el subtotal
   document.getElementById(`columnaSubtotal${id}`).innerHTML+=agregarAHtml2 + `</tr>` ;//Agregamos a columnaSubtotal la variable anterior q tiene calculado el subtotal
} }

function agregarEnvio() {

    //Para hacer funcionalidad de envíos
}

//Necesito q la funcion tome el parámetro iD 

function agregarProductos() {//Hay q pasarle como parámetro a arrayCompras
let valoresDefault=[itemsDefault[0].articles[0].id,itemsDefault[0].articles[0].name,itemsDefault[0].articles[0].unitCost,itemsDefault[0].articles[0].image,itemsDefault[0].articles[0].currency]
    localStorage.setItem(`${itemsDefault[0].articles[0].id}`,valoresDefault)

    let stringComprado= localStorage.getItem("ids");
     arrayIds = stringComprado.split(","); //arrayIds ya es un array con todas las ids de los objetos
     console.log(arrayIds);
     console.log("arrayIds.length-----------------------------------------",arrayIds.length);

for (let i = 1; i <arrayIds.length; i++) {  //El if debe ir dentro del for, porque el mismo es el que hace variar las ids

console.log("itera  =======>",i);

if (arrayIds[i]==50924) { 
    console.log("ES EL ITEM DEFAULT------------------------------------------------------------------");
    document.getElementById(`cantidadItems50924`).value++;
    console.log("ESTE ES EL VALOR DE CANTIDAD DE ITEMS -----------------", document.getElementById(`cantidadItems50924`).value);

    let subTotal=itemsDefault[0].articles[0].unitCost
    let moneda=itemsDefault[0].articles[0].currency

    SubTotal(document.getElementById(`cantidadItems50924`).value,50924,subTotal,moneda)

}else if (idsUsadas.includes(arrayIds[i])) {

let id=arrayIds[i];
let subTotal=parseInt(document.getElementById(`columnaSubtotal${id}`).title)
let moneda=document.getElementById(`currency${id}`).title
console.log(arrayCompras[0]);
console.log(id);

    console.log("ES UNA ID USADA------------------------------------------------------------------");//Se le agrega 1 a cantidad
   /*  subTotal=parseInt(document.getElementById(`cantidadItems${id}`).value)*(subTotal1);
    let agregarAHtml21=`${subTotal}` */
    document.getElementById(`cantidadItems${id}`).value++;
/*     document.getElementById(`cantidadItems${id}`).value.innerHTML++; */ //Arregla el problema
  
    console.log("ESTE ES EL VALOR DE CANTIDAD DE ITEMS -----------------",document.getElementById(`cantidadItems${id}`).value);

   /*  document.getElementById(`cantidadItems${id}`).value.innerHTML=document.getElementById(`cantidadItems${id}`).value; */
    SubTotal(document.getElementById(`cantidadItems${id}`).value,id,subTotal,moneda) //Llamamos a la función que calcula el subTotal

}else{

    idsUsadas.push(arrayIds[i]);

    console.log("No Está repetida------------------------------------------------------------------");
    let stringCompras= localStorage.getItem(`${arrayIds[i]}`);//Queremos traer los datos del objeto con id=arrayIds[i],al traerlo del local, nos lo devuelve como un srting, xa volverlo array misma estrategia= split()
arrayCompras= stringCompras.split(",");//Al fin obtenemos el array con los datos del objeto
console.log("Este es el array de Compras:",arrayCompras);
    
let id=arrayIds[i];
console.log(id);

let subTotal1=arrayCompras[2]


    console.log("--------------------------****--------------",subTotal1)


    let agregarAHtml1 =`
        <tr>
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${arrayCompras[3]}></th>
         <td class="text-center"><p class="centrado">${arrayCompras[1]}</p></td>
         <td class="text-center"><p class="centrado">${arrayCompras[4]} ${arrayCompras[2]}</p></td> 
        <span id="currency${id}" title=${arrayCompras[4]}></span>
         <td class="text-center"><input onkeyup="agregarCantidad(this.value,${id},${arrayCompras[2]},'${arrayCompras[4]}')" class="input text-center" id="cantidadItems${id}" type="text" placeholder=1 value=1 min="1" step="1"></td>
         
         <td  class="text-center"><p class="centrado fw-bold" id="columnaSubtotal${id}" title=${arrayCompras[2]}>${arrayCompras[4]} </p></td>` //Columa Subtotal

         document.getElementById("contenedorItems").innerHTML+=agregarAHtml1; //Agregamos los divs al html
         mintotal=parseInt(document.getElementById(`cantidadItems${id}`).value)*(subTotal1);//Calcula el subtotal Default
         console.log("cantidad================",document.getElementById(`cantidadItems${id}`).value);
         let agregarAHtml21=`${mintotal}` 
         document.getElementById(`columnaSubtotal${id}`).innerHTML+=agregarAHtml21 + `</tr>` ;

   


}}}

/* valorActual= if(cantidadItems${id}.value>1){
localStorage("cantidad",cantidadItems${id}.value)
return cantidad=cantidadItems${id}.value;
}else if(){
return cantidad=cantidadItems${id}.value;
} */

document.addEventListener("DOMContentLoaded",traerItems());









