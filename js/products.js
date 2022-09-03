
let idProducto = localStorage.getItem("catID"); //Obtenemos el id del producto al que el usuario le da click
const autoURL= "https://japceibal.github.io/emercado-api/cats_products/"+`${idProducto}`+".json"; // hacemos variar el id del json xa que de el objeto con los productos correspondientes.
let max;
let min;
let arrayMain=[];


document.addEventListener("DOMContentLoaded",function(){
        getJSONData(autoURL).then(function(resultObj){
            if (resultObj.status === "ok"){
                let arraydatos = resultObj.data;

            let titulo=`
            <div class="text-center p-4">
            <h1>Productos</h1>
            <h5 class="lead">Verás aquí todos los productos de la categoría: ${arraydatos.catName}</h5>
          </div>
          `
            document.getElementById("titulo").innerHTML=titulo; 

           /*  Para mayor comodidad defino la funcion mostrarProductos  */

           arrayMain=arraydatos.products;

            function mostrarProductos(arrayOrdenado){  /* Podria sacarla fuera de la escucha ---Es la equivalente a mostrarLibros() */ 

            document.getElementById("Autos").innerHTML ="";     
            
               for (i = 0; i < arrayOrdenado.length; i++) {

                let array= arrayOrdenado[i];

                if ((!(array.cost< min)) && (!(array.cost> max))) {

               datos=Object.values(array);
    
                    let htmlContentToAppend = ""; /* Creo un string vacío al cuál le agregaremos la lista */

                    htmlContentToAppend += 
                    `
                    <div class="list-group-item list-group-item-action">
                        <div class="row">
                            <div class="col-3">
                                <img src="` + datos[6]+ `" alt="product image" class="img-thumbnail">
                            </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <div class="mb-1">
                                    <h4>`+datos[1]+" "+"-"+" "+datos[4]+" "+datos[3]+`</h4> 
                                    <p> `+ datos[2] +`</p> 
                                    </div>
                                    <small class="text-muted">` +  datos[5] + ` artículos</small> 
                                </div>
            
                            </div>
                        </div>
                    </div>
                    `
                    
                     document.getElementById("Autos").innerHTML += htmlContentToAppend;  
               }
                
               }} 
               mostrarProductos(arrayMain);

             /*   A partir de acá empiezo a probar la pauta 3 */
             

             document.getElementById("filtrar").addEventListener("click",function(){ /* Debe filtrar los productos que cumplan con las condiciones de los precios */
             max=parseInt(document.getElementById("max").value);
             min=parseInt(document.getElementById("min").value);

             mostrarProductos(arrayMain)

}) /*  Acá termina Filtrar */

/* Acá comienza Ordenar por Relevancia(rel)*/

document.getElementById("rel").addEventListener("click",function(){ /* Debe filtrar los productos que cumplan con las condiciones de los precios */
             arrayMain.sort(function(a,b) {
                 return b.soldCount - a.soldCount
                 } )
                 
             document.getElementById("Autos").innerHTML ="";
             mostrarProductos(arrayMain);

}) /* Acá termina Ordenar */


/* Acá comienza Ordenar por precio ascendente(menorMayor)*/

document.getElementById("menorMayor").addEventListener("click",function(){ /* Debe filtrar los productos que cumplan con las condiciones de los precios */
             arrayMain.sort(function(a,b) {
                 return b.cost - a.cost
                 } )
                 
             document.getElementById("Autos").innerHTML ="";
             mostrarProductos(arrayMain);
                })

/* Acá termina precio ascendente  */



/* Acá comienza Ordenar por precio descendente(mayorMenor)*/

document.getElementById("mayorMenor").addEventListener("click",function(){
     /* Debe filtrar los productos que cumplan con las condiciones de los precios */
             arrayMain.sort(function(a,b) {
                 return a.cost - b.cost
                 } )
                 
             document.getElementById("Autos").innerHTML ="";
             mostrarProductos(arrayMain);

/* Acá termina precio descendente  */



            } /* Terminación de función si sale bien del json */
    




        )
    }})});
