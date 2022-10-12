let userId=25801;
let url=`https://japceibal.github.io/emercado-api/user_cart/${userId}.json`;
let itemsDefault=[];
let subTotal;



function traerItems() {
    fetch(url)
    .then(response=>response.json())
    .then(data=>itemsDefault.push(data))
    .then(agregarHtml)
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

         document.getElementById("contenedorItems").innerHTML=agregarAHtml;
         subTotal=parseInt(document.getElementById("cantidadItems").value)*(subTotal);

let agregarAHtml2=`${subTotal}` 
   document.getElementById("columnaUltima").innerHTML+=agregarAHtml2 + `</tr>` ;
} }//cierre de función

function agregarEnvio() {

    
}
document.addEventListener("DOMContentLoaded",traerItems());









