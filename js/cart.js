let userId = 25801; 
let url = `https://japceibal.github.io/emercado-api/user_cart/${userId}.json`;
let itemsDefault = [];
let iD = localStorage.getItem("idObjeto");
let arrayCompras;
let idsUsadas = [];
let id;
let subtotal;
let currencyIdsNuevas;//Se usa como currency xa las ids nuevas
let nuevaCantidad;// Variable que me guarda la nueva cantidad(cuando el usuario modifica la cantidad de productos que quiere)
let subTotalUltimo;// Es el nuevo subtotal , resultante de los cambios de cantidad o más objetos
let arraysumaSubtotales=[15200]; // Es el array que contiene la suma de los subtotales
let subTotalItem;// Guarda el subtotal del item modificado
let subTotalDefault;//Es el subtotal del item Default
let subTotalIdsNuevas;//Es el subtotal literal del producto, es decir lo que cuesta 1 unidad(Xa las ids nuevas)
let subTotalIdsRepetidas;//Es el subtotal literal del producto, es decir lo que cuesta 1 unidad(Xa las ids repetidas)
let subTotalDefaultMasAgregado;//Es el subtotal del item default cuando se le agregan más cantidades
let costoEnvio; //Se guarda el valor que tendrá el envío
let totalCompra;// Se calcula el total de la compra(articulos + costo envío )
let eleccionUser;//Acá se guarda la elección de método de envío. 
let precios; //Se guarda acá el precio del item en dólares(se hace la conversión cuano es necesario)
let subTotalAntesCostoEnvio;//Se guarda el subTotal antes de sumarle el costo de envío
let ids;//Creo el array ids, al cual le pasaremos todos los ids que recibamos(Con el objetivo de poder comparar nuevos y viejos) 
ids = iD;
console.log(ids);


function traerIds() {
  if (ids == null) { }// Esto lo hago para filtrar las ids q me llegan 
else {
    let agregar = [localStorage.getItem("ids")]
    agregar.push(ids)
    localStorage.setItem("ids", agregar);//Recordar que el array agregar , se va al local como string , debemos volverlo nuevamente array con split()
}  
}





 
function mostrarSubtotal(id) {
    calcularValoresUltima()

    document.getElementById("subtotal").innerHTML = `USD ${subTotalAntesCostoEnvio}`// AGREGO SUBTITALISIMO


  }

  function calcularValoresUltima() {

        subTotalAntesCostoEnvio=0; 
        
        for (i=0; i < arrayIds.length; i++) {

console.log("ESTA ES LA I Q PASA",i);

       if(document.getElementById(`${i}`)== null){

       } 
       else if (document.getElementById(`${i}`).title=="UYU") {
            console.log("ENTRA AL IF");
            precios=(Math.round(parseInt(document.getElementsByName(`${i}`)[0].title))/41);  console.log(precios);   
            subTotalAntesCostoEnvio+=precios

        }else if (document.getElementsByName(`${i}`)[0] !== undefined){
            console.log("ENTRA AL IF ELSE");
     precios=parseInt(document.getElementsByName(`${i}`)[0].title);     
       subTotalAntesCostoEnvio+=precios
       console.log(subTotalAntesCostoEnvio);
      
       }else{
        console.log("ENTRA AL ELSE");
        precios=parseInt(document.getElementsByName(`${i++}`)[0].title);     
       subTotalAntesCostoEnvio+=precios
       console.log(subTotalAntesCostoEnvio);
       }
  }

}


function mostrarCostoEnvio() {
    eleccionUser = 5 / 100;
    costoEnvio = subTotalAntesCostoEnvio * eleccionUser;//AGREGO subTotalAntesCostoEnvio
    console.log(costoEnvio);
    document.getElementById("costoEnvio").innerHTML = `USD ${costoEnvio}`;
    total();

    document.addEventListener("change", () => {
        if (document.getElementById("t1").checked) {
            eleccionUser = 15 / 100
        } else if (document.getElementById("t2").checked) { eleccionUser = 7 / 100; }
        else { eleccionUser = 5 / 100 }

        console.log("ELECCIONUSER---------->", eleccionUser);

        costoEnvio = subTotalAntesCostoEnvio * eleccionUser; //Elija el user * subtotal
        console.log("costoEnvio---------->", costoEnvio);


        document.getElementById("costoEnvio").innerHTML = `USD ${costoEnvio}`;

        total();


    })//Cierra el addEvent
}//Cierra la function


function muestraCostos() {
    mostrarSubtotal()
    mostrarCostoEnvio()
}

function total() {
    totalCompra = costoEnvio + subTotalAntesCostoEnvio; 

    document.getElementById("Total").innerHTML = `USD ${totalCompra}`;

}

/* Termino entrega 6 */

//Comienzo formulario entrega 6

let formulario = document.getElementById("formulario1")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    e.stopPropagation()
    validacionTipoEnvio()
    formaDePago()
    

        if (formulario.checkValidity()) {
           document.getElementById("finCompra").innerHTML+=
        `<div class="alert alert-success close" role="alert"><a href="">
  Todo salió bien !!</a>
</div>`
        }

    formulario.classList.add("was-validated");

})

function validacionTipoEnvio() {
    if ((document.getElementById("t1").checked || document.getElementById("t2").checked || document.getElementById("t3").checked)) {
        document.getElementById("t3").setCustomValidity('')
    }

}
function formaDePago() {

    document.getElementById('staticBackdrop').classList.add('was-validated');

    let tarjeta=document.getElementById("tarjetaCredito").checked
    let transferencia=document.getElementById("transferencia").checked

 if(tarjeta){
        console.log("entra bien a tarjeta");
        document.getElementById("seleccion").innerHTML="Tarjeta de Crédito"
        document.getElementById("agregarError").innerHTML=``
        document.getElementById("numeroCuenta").setAttribute("disabled", "");
        document.getElementById("transferencia").setAttribute("disabled", "");}

     if(transferencia){

        console.log("entra bien a transferencia");

          document.getElementById("seleccion").innerHTML=`Transferencia Bancaria`
          document.getElementById("agregarError").innerHTML=``
          document.getElementById("vencimiento").setAttribute("disabled","");
          document.getElementById("numeroTarjeta").setAttribute("disabled", "");
          document.getElementById("tarjetaCredito").setAttribute("disabled", "");
          document.getElementById("codSeguridad").setAttribute("disabled","");
}

 if (!(tarjeta || transferencia)) {
    document.getElementById("agregarError").innerHTML=`<p style="color:red">Debe seleccionar una forma de pago</p>`
 } 
}  

//Termino formulario entrega 6

function traerItems() {
    fetch(url)
        .then(response => response.json())
        .then(data => itemsDefault.push(data))
        .then(agregarHtml)
        .then(agregarProductos)
        .then(muestraCostos)
}


function agregarCantidad(valor, id, subTotal, moneda,spanid) {//función xa mostrar valor del resto de objetos
   spanid=spanid;
    console.log("Este es el sub-total que recibe como parámetro---------------------", subTotal); 
    if (valor > 1) {
        nuevaCantidad = parseInt(valor);
        document.getElementById(`cantidadItems${id}`).value = nuevaCantidad;

        SubTotal(valor, id, subTotal, moneda,spanid);
    }
    else { SubTotal(1, id, subTotal, moneda,spanid); }
}

function SubTotal(valor, id, subTotal, moneda,spanid) {  //Creo la función para calcular el subtotal
   
    if (valor >= 1) {

        subTotalItem=subTotal //Guarda el subtotal del item que se modifica

        if (moneda=="UYU") {
            subTotalItem=Math.round(subTotal/41)
            console.log(document.getElementById(spanid).title);
             document.getElementById(spanid).title="USD"
             moneda="USD"
        }

        subTotalUltimo = parseInt(valor) * subTotalItem;

        localStorage.setItem("subTotalUltimo",`${subTotalUltimo}`)
   
        console.log("PASA X ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", subTotalUltimo); 
        arraysumaSubtotales.push(`${subTotalUltimo}`)
        document.getElementById(`cantidadItems${id}`).value.innerHTML++;
        document.getElementById(`columnaSubtotal${id}`).title = `${subTotalUltimo}`;
         muestraCostos()
         document.getElementById(`columnaSubtotal${id}`).innerHTML = `${moneda} ${subTotalUltimo}`;
}
     

}


function agregarHtml() { //Función que agrega el producto Default

    id = itemsDefault[0].articles[0].id;

    document.getElementById("contenedorItems").innerHTML += "";

    for (let i = 0; i < itemsDefault.length; i++) {



         subTotalDefault = itemsDefault[i].articles[i].unitCost;
         mooneda=itemsDefault[i].articles[i].currency;

        let agregarAHtml = `
        <tr id="${id}tabla">
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${itemsDefault[i].articles[i].image}></th>
         <td class="text-center"><p class="centrado">${itemsDefault[i].articles[i].name}</p></td>
         <td class="text-center"><p class="centrado" >USD ${itemsDefault[i].articles[i].unitCost}</p></td> 
         <td class="text-center"><input onkeyup="agregarCantidad(this.value,${itemsDefault[0].articles[0].id},${itemsDefault[0].articles[0].unitCost},'${itemsDefault[0].articles[0].currency}')" class="input text-center" id="cantidadItems${id}" type="number" placeholder=1 value=1 min=1 step="1"></td>
         <td  class="text-center"><p class="centrado fw-bold"  name= 0 title="${itemsDefault[0].articles[0].unitCost}" id="columnaSubtotal${id}">USD </p>
         <span id="0" title="${mooneda}"></span>
         </td>
         <td class="pt-3"><button type="button" onclick="borrarElemento(${id})" class="btnBorrar"></button></td>`

        document.getElementById(`contenedorItems`).innerHTML = agregarAHtml;//agregamos lo q tenemos hasta ahora al html
        subTotalDefault = parseInt(document.getElementById(`cantidadItems${id}`).value) * (subTotalDefault);//Calculamos el subTotal

        let agregarAHtml2 = `${subTotalDefault}` //Definimos una variable con el valor q calculamos el subtotal
        document.getElementById(`columnaSubtotal${id}`).innerHTML += agregarAHtml2 + `</tr>`;//Agregamos a columnaSubtotal la variable anterior q tiene calculado el subtotal
    }
}

//Necesito q la funcion tome el parámetro iD 

function agregarProductos() {//Función que agrega los productos cuando el user da comprar
    
    let valoresDefault = [itemsDefault[0].articles[0].id, itemsDefault[0].articles[0].name, itemsDefault[0].articles[0].unitCost, itemsDefault[0].articles[0].image, itemsDefault[0].articles[0].currency]
    localStorage.setItem(`${itemsDefault[0].articles[0].id}`, valoresDefault)

    let stringComprado = localStorage.getItem("ids");// Se puede hacer más práctico con JSON.parse
    arrayIds = stringComprado.split(","); //arrayIds ya es un array con todas las ids de los objetos

    for (let i = 1; i < arrayIds.length; i++) {  //El if debe ir dentro del for, porque el mismo es el que hace variar las ids

        console.log("itera  =======>", i);

        if (arrayIds[i] == 50924) {
            console.log("ES EL ITEM DEFAULT------------------------------------------------------------------");
            document.getElementById(`cantidadItems50924`).value++;
            console.log("ESTE ES EL VALOR DE CANTIDAD DE ITEMS -----------------", document.getElementById(`cantidadItems50924`).value);
            arraysumaSubtotales.push(`${itemsDefault[0].articles[0].unitCost}`);

            subTotalDefaultMasAgregado = itemsDefault[0].articles[0].unitCost
            let moneda = itemsDefault[0].articles[0].currency

            SubTotal(document.getElementById(`cantidadItems50924`).value, 50924, subTotalDefaultMasAgregado, moneda)// Devuelve subTotalUltimo

        } else if (idsUsadas.includes(arrayIds[i])) {//ES UNA ID USADA

            let id = arrayIds[i];
            subTotalIdsRepetidas = parseInt(document.getElementById(`columnaSubtotal${id}`).title)//literalemnete el valor del objeto
            let moneda = document.getElementById(`currency${id}`).title
            arraysumaSubtotales.push(`${subTotalIdsRepetidas}`);
            console.log(arrayCompras[0]);
            console.log(id);

            console.log("ES UNA ID USADA------------------------------------------------------------------");//Se le agrega 1 a cantidad
            document.getElementById(`cantidadItems${id}`).value++;
                document.getElementById(`cantidadItems${id}`).value.innerHTML++; //Arregla el problema

            console.log("ESTE ES EL VALOR DE CANTIDAD DE ITEMS -----------------", document.getElementById(`cantidadItems${id}`).value);
            SubTotal(document.getElementById(`cantidadItems${id}`).value, id, subTotalIdsRepetidas, moneda) //Llamamos a la función que calcula el subTotal

        } else { // IDS nueva

            let spanid=i;

            idsUsadas.push(arrayIds[i]); // Se agrega al array de ids

            console.log("No Está repetida------------------------------------------------------------------");
            let stringCompras = localStorage.getItem(`${arrayIds[i]}`);//Queremos traer los datos del objeto con id=arrayIds[i],al traerlo del local, nos lo devuelve como un srting, xa volverlo array misma estrategia= split()
            arrayCompras = stringCompras.split(",");//Al fin obtenemos el array con los datos del objeto
            console.log("Este es el array de Compras:", arrayCompras);

            id = arrayIds[i];
            vaalor=1
            subtotal=arrayCompras[2]
            currencyIdsNuevas=arrayCompras[4]
            console.log("ESTO ES currencyIdsNuevas",currencyIdsNuevas);

            subTotalIdsNuevas = arrayCompras[2]
            arraysumaSubtotales.push(`${subTotalIdsNuevas}`);



            console.log("--------------------------****--------------", subTotalIdsNuevas)


            let agregarAHtml1 = `
        <tr id="${id}tabla">
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${arrayCompras[3]}></th>
         <td class="text-center"><p class="centrado">${arrayCompras[1]}</p></td>
         <td class="text-center"><p class="centrado">${arrayCompras[4]} ${arrayCompras[2]}</p></td> 
        <span id="currency${id}" title=${arrayCompras[4]}></span>
         <td class="text-center"><input onkeyup="agregarCantidad(this.value,${id},${arrayCompras[2]},'${arrayCompras[4]}',${spanid})" class="input text-center" id="cantidadItems${id}" type="number" placeholder=1 value=1 min="1" step="1"></td>
         
         <td  class="text-center"><p class="centrado fw-bold" name="${i}" id="columnaSubtotal${id}" title=${arrayCompras[2]}>${arrayCompras[4]} </p>
         <span id="${spanid}" title="${currencyIdsNuevas}"></span>
         </td> 
         <td class="pt-3"><button type="button" onclick="borrarElemento(${id})" class="btnBorrar"></button></td>`

            document.getElementById("contenedorItems").innerHTML += agregarAHtml1; //Agregamos los divs al html
            mintotal = parseInt(document.getElementById(`cantidadItems${id}`).value) * (subTotalIdsNuevas);//Calcula el subtotal Default
            console.log("cantidad================", document.getElementById(`cantidadItems${id}`).value);
            let agregarAHtml21 = `${mintotal}`
            document.getElementById(`columnaSubtotal${id}`).innerHTML += agregarAHtml21 + `</tr>`;




        }
    }
}

function borrarElemento(nid) {
console.log("PASA X ACA 1");
    calcularValoresUltima()
    console.log("PASA X ACA 2");

     subTotalAntesCostoEnvio=subTotalAntesCostoEnvio-parseInt(document.getElementById(`columnaSubtotal${nid}`).title)

     document.getElementById("subtotal").innerHTML = `USD ${subTotalAntesCostoEnvio}`
arrayIdsActualizado=[50924]
arrayIdsActualizado+=arrayIds.filter((items)=>{parseInt(items)!==parseInt(nid)
console.log(items);
console.log(nid);

console.log(parseInt(items)!==parseInt(nid));
});
console.log(arrayIdsActualizado);
localStorage.removeItem("ids");
localStorage.setItem("ids",arrayIdsActualizado)

traerIds()
mostrarCostoEnvio()


console.log(`${nid}tabla`);

     document.getElementById(`${nid}tabla`).innerHTML=""

     
   
    
}

document.addEventListener("DOMContentLoaded", (e) => {
    traerIds()
    traerItems()
});











