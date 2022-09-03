let idProducto = localStorage.getItem("catID"); //Obtenemos el id del producto al quel usuario le da click
const autoURL= "https://japceibal.github.io/emercado-api/cats_products/"+`${idProducto}`+".json"; // hacemos variar el id del json xa que de el objeto con los productos correspondientes.
let datos;
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

               for (i = 0; i < arraydatos.products.length; i++) {

                let array= arraydatos.products[i];

               datos=Object.values(array);

                let htmlContentToAppend = "";

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

               }
    
            }
        )});

document.getElementById("filtrar").addEventListener("click",function(){

let max=document.getElementById("max").value;

let min=document.getElementById("min").value;

})

