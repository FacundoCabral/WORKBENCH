let userId=25801;
let url=`https://japceibal.github.io/emercado-api/user_cart/${userId}.json`;
let itemsDefault=[];
let subTotal;
let iD= localStorage.getItem(`identificador`);
let stringComprado= localStorage.getItem(`${iD}`);
let arrayCompras=stringComprado.split(",");
console.log(arrayCompras)
//Una vez tengo el array , debo modificar la funciòn que lo imrpime en pantalla xa que tengan el mismo formato.
//De hecho puedo crear otra funciòn q imprima en pantalla el objeto sin necesidad de modificar la otra.



function traerItems() {
    fetch(url)
    .then(response=>response.json())
    .then(data=>itemsDefault.push(data))
    .then(agregarHtml)
    .then(agregarProductos)
}

function mostrar(valor){
    if (valor>0) {
        subTotal=parseInt(valor)* subTotal
    }else{subTotal=itemsDefault[0].articles[0].unitCost;}
    document.getElementById("columnaUltima").innerHTML=`USD ${subTotal}`;
console.log(subTotal);
}

function agregarHtml() {



document.getElementById("contenedorItems").innerHTML+="";

 for (let i= 0; i < itemsDefault.length; i++) {

    subTotal=itemsDefault[i].articles[i].unitCost;
    console.log(subTotal);

 let agregarAHtml =`
        <tr>
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${itemsDefault[i].articles[i].image}></th>
         <td class="text-center"><p class="centrado">${itemsDefault[i].articles[i].name}</p></td>
         <td class="text-center"><p class="centrado">USD ${itemsDefault[i].articles[i].unitCost}</p></td> 
         <td class="text-center"><input onkeyup="mostrar(this.value)" class="input text-center" id="cantidadItems" type="text" placeholder=1 value=1 min=1 step="1"></td>
         <td  class="text-center"><p class="centrado fw-bold" id="columnaUltima">USD </p></td>`

         document.getElementById("contenedorItems").innerHTML=agregarAHtml;//agregamos lo q tenemos hasat ahora al html
         subTotal=parseInt(document.getElementById("cantidadItems").value)*(subTotal);//Calculamos el subtotal

let agregarAHtml2=`${subTotal}` //Definimos una variable con el valor q calculamos el subtotal
   document.getElementById("columnaUltima").innerHTML+=agregarAHtml2 + `</tr>` ;//Agregamos a columnaUltima la variable anterior q tiene calculado el subtotal
} }

function agregarEnvio() {

    //Para hacer funcionalidad de envíos
}

function agregarProductos(id) {
    

    if (id) {
        
    }

    subTotal1=arrayCompras[2];

for (let i = 0; i < 1; i++) {

    

    let agregarAHtml1 =`
        <tr>
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${arrayCompras[3]}></th>
         <td class="text-center"><p class="centrado">${arrayCompras[1]}</p></td>
         <td class="text-center"><p class="centrado">USD ${arrayCompras[2]}</p></td> 
         <td class="text-center"><input onkeyup="mostrar(this.value)" class="input text-center" id="cantidadItems${i}" type="text" placeholder=1 value=1 min=1 step="1"></td>
         <td  class="text-center"><p class="centrado fw-bold" id="columnaUltima${i}">USD </p></td>`

         document.getElementById("contenedorItems").innerHTML+=agregarAHtml1;
         subTotal=parseInt(document.getElementById(`cantidadItems${i}`).value)*(subTotal1);
         let agregarAHtml21=`${subTotal1}` 
   document.getElementById(`columnaUltima${i}`).innerHTML+=agregarAHtml21 + `</tr>` ;
}

}

document.addEventListener("DOMContentLoaded",traerItems());









