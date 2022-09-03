
let idProducto = localStorage.getItem("catID"); //Obtenemos el id del producto al quel usuario le da click
const autoURL= "https://japceibal.github.io/emercado-api/cats_products/"+`${idProducto}`+".json"; // hacemos variar el id del json xa que de el objeto con los productos correspondientes.
let arrayDeDatos;


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

           /*  Debo crear acá el array con los productos  */

           let array1 = Object.values(arraydatos);
           let array2= array1[2] // array2 es un array de objetos => Ya debería poder usar el .sort
           let array3="";
           for (let i = 0; i < array2.length; i++) {
            array3 +=array2[i].cost
           }
             console.log(array3)



            /* Acá termina lo del array */



           /*  Para mayor comodidad defino la funcion mostrarProductos  */

            function mostrarProductos(){  /* Podria borrar esta funcion en caso de q no sirva  */

               for (i = 0; i < arraydatos.products.length; i++) {

                let array= arraydatos.products[i];

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

                
               }} 
               mostrarProductos();
             /*   A partir de acá empiezo a probar la pauta 3 */
             

               document.getElementById("filtrar").addEventListener("click",function(){ /* Debe filtrar los productos que cumplan con las condiciones de los precios */
               let max=document.getElementById("max").value;
               let min=document.getElementById("min").value;
               array2.sort(function(a,b) {
/* 
                if (a.) {
                    
                } */
                
               })
})


            } /* Terminación de función si sale bien del json */
    



            }
        )});
