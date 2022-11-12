let userId = 25801;
let url = `https://japceibal.github.io/emercado-api/user_cart/${userId}.json`;
let itemsDefault = [];
let iD = localStorage.getItem("idObjeto");
let arrayCompras;
let idsUsadas = [];
let id;
let sumaTotal;
let vaalor;
let subtotal;
let moenda;
let items={};
let cantidad50924;
let cantidad;
let nuevaCantidad;// Variable que me guarda la nueva cantidad
let subTotalUltimo;
let sumaSubtotales=15200;
let arraysumaSubtotales=[15200];
let subTotal4;
let idsFiltrados;
let subTotal;
let subTotal3;//Es el subtotal literal del producto, es decir lo que cuesta 1 unidad(Xa las ids nuevas)
let subTotal2;//Es el subtotal literal del producto, es decir lo que cuesta 1 unidad(Xa las ids repetidas)
let subTotal1;//Es el subtotal del item default cuando se le agregan más cantidades
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


/* Comienzo entrega 6 */

let costoEnvio; // Subir a donde las variables
let totalCompra;
let eleccionUser;
let valores=[]; //Ultima variable q agrego
let precios; //Ultima variable q agrego
let subtotalisimo;
 
function mostrarSubtotal(id) {
    calcularValoresUltima()

    document.getElementById("subtotal").innerHTML = `USD ${subtotalisimo}`// AGREGO SUBTITALISIMO


  }

  function calcularValoresUltima() {

        subtotalisimo=0; 
        
        for (i=0; i < arrayIds.length; i++) {

console.log("ESTA ES LA I Q PASA",i);

       if(document.getElementById(`${i}`)== null){

       } 
       else if (document.getElementById(`${i}`).title=="UYU") {
            console.log("ENTRA AL IF");
            precios=(Math.round(parseInt(document.getElementsByName(`${i}`)[0].title))/41);  console.log(precios);   
            subtotalisimo+=precios

        }else if (document.getElementsByName(`${i}`)[0] !== undefined){
            console.log("ENTRA AL IF ELSE");
     precios=parseInt(document.getElementsByName(`${i}`)[0].title);     
       subtotalisimo+=precios
       console.log(subtotalisimo);
      
       }else{
        console.log("ENTRA AL ELSE");
        precios=parseInt(document.getElementsByName(`${i++}`)[0].title);     
       subtotalisimo+=precios
       console.log(subtotalisimo);
       }
  }

}


function mostrarCostoEnvio() {
    eleccionUser = 5 / 100;
    costoEnvio = subtotalisimo * eleccionUser;//AGREGO SUBTOTALISIMO
    console.log(costoEnvio);
    document.getElementById("costoEnvio").innerHTML = `USD ${costoEnvio}`;
    total();

    document.addEventListener("change", () => {
        if (document.getElementById("t1").checked) {
            eleccionUser = 15 / 100
        } else if (document.getElementById("t2").checked) { eleccionUser = 7 / 100; }
        else { eleccionUser = 5 / 100 }

        console.log("ELECCIONUSER---------->", eleccionUser);

        costoEnvio = subtotalisimo * eleccionUser; //Elija el user * subtotal
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
    totalCompra = costoEnvio + subtotalisimo;  // REVISAR ESTA SUMA SI HAY ERROR

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
    if ((document.getElementById("1").checked || document.getElementById("2").checked || document.getElementById("3").checked)) {
        document.getElementById("3").setCustomValidity('')
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

/* document.getElementById("conteinerItems").addEventListener("change",()=>{
agregarCantidad(vaalor,id,subtotal,moenda)
}) */

function agregarCantidad(valor, id, subTotal, moneda,spanid) {//función xa mostrar valor del resto de objetos
   spanid=spanid;
    console.log("Este es el sub-total que recibe como parámetro---------------------", subTotal);
   /*  vaalor=parseInt(document.getElementById(`cantidadItems${id}`).value)
    subtotal=suubTotal;
    moenda=mooneda,
 */
   /*  console.log(moenda);
    console.log(document.getElementById(`cantidadItems${id}`).value) */
    
    if (valor > 1) {
        nuevaCantidad = parseInt(valor);
        document.getElementById(`cantidadItems${id}`).value = nuevaCantidad;

        SubTotal(valor, id, subTotal, moneda,spanid);
    }
    else { SubTotal(1, id, subTotal, moneda,spanid); }
}

function SubTotal(valor, id, subTotal, moneda,spanid) {  //Creo la función para calcular el subtotal
   
    if (valor >= 1) {

        subTotal4=subTotal

        if (moneda=="UYU") {
            subTotal4=Math.round(subTotal/41)
            console.log(document.getElementById(spanid).title);
             document.getElementById(spanid).title="USD"
             moneda="USD"
        }

        subTotalUltimo = parseInt(valor) * subTotal4;

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



         subTotal = itemsDefault[i].articles[i].unitCost;
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
        subTotal = parseInt(document.getElementById(`cantidadItems${id}`).value) * (subTotal);//Calculamos el subtotal

        let agregarAHtml2 = `${subTotal}` //Definimos una variable con el valor q calculamos el subtotal
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

            subTotal1 = itemsDefault[0].articles[0].unitCost
            let moneda = itemsDefault[0].articles[0].currency

            SubTotal(document.getElementById(`cantidadItems50924`).value, 50924, subTotal1, moneda)// Devuelve subTotalUltimo

        } else if (idsUsadas.includes(arrayIds[i])) {//ES UNA ID USADA

            let id = arrayIds[i];
            subTotal2 = parseInt(document.getElementById(`columnaSubtotal${id}`).title)//literalemnete el valor del objeto
            let moneda = document.getElementById(`currency${id}`).title
            arraysumaSubtotales.push(`${subTotal2}`);
            console.log(arrayCompras[0]);
            console.log(id);

            console.log("ES UNA ID USADA------------------------------------------------------------------");//Se le agrega 1 a cantidad
            document.getElementById(`cantidadItems${id}`).value++;
                document.getElementById(`cantidadItems${id}`).value.innerHTML++; //Arregla el problema

            console.log("ESTE ES EL VALOR DE CANTIDAD DE ITEMS -----------------", document.getElementById(`cantidadItems${id}`).value);

            /*  document.getElementById(`cantidadItems${id}`).value.innerHTML=document.getElementById(`cantidadItems${id}`).value; */
            SubTotal(document.getElementById(`cantidadItems${id}`).value, id, subTotal2, moneda) //Llamamos a la función que calcula el subTotal

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
            moenda=arrayCompras[4]

            subTotal3 = arrayCompras[2]
            arraysumaSubtotales.push(`${subTotal3}`);



            console.log("--------------------------****--------------", subTotal3)


            let agregarAHtml1 = `
        <tr id="${id}tabla">
         <th><img class="imagenesTabla rounded mx-auto d-block" src=${arrayCompras[3]}></th>
         <td class="text-center"><p class="centrado">${arrayCompras[1]}</p></td>
         <td class="text-center"><p class="centrado">${arrayCompras[4]} ${arrayCompras[2]}</p></td> 
        <span id="currency${id}" title=${arrayCompras[4]}></span>
         <td class="text-center"><input onkeyup="agregarCantidad(this.value,${id},${arrayCompras[2]},'${arrayCompras[4]}',${spanid})" class="input text-center" id="cantidadItems${id}" type="number" placeholder=1 value=1 min="1" step="1"></td>
         
         <td  class="text-center"><p class="centrado fw-bold" name="${i}" id="columnaSubtotal${id}" title=${arrayCompras[2]}>${arrayCompras[4]} </p>
         <span id="${spanid}" title="${moenda}"></span>
         </td> 
         <td class="pt-3"><button type="button" onclick="borrarElemento(${id})" class="btnBorrar"></button></td>`

            document.getElementById("contenedorItems").innerHTML += agregarAHtml1; //Agregamos los divs al html
            mintotal = parseInt(document.getElementById(`cantidadItems${id}`).value) * (subTotal3);//Calcula el subtotal Default
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

     subtotalisimo=subtotalisimo-parseInt(document.getElementById(`columnaSubtotal${nid}`).title)

     document.getElementById("subtotal").innerHTML = `USD ${subtotalisimo}`
arrayIdsActualizado=[50924]
arrayIdsActualizado+=arrayIds.filter((items)=>{parseInt(items)!==parseInt(nid)
console.log(items);
console.log(nid);

console.log(parseInt(items)!==parseInt(nid));
});//Podría probar a modificar arrayIds, en vez de crear otro array=idsFiltrados
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











