const autoURL= "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded",function(){
        getJSONData(autoURL).then(function(resultObj){
            if (resultObj.status === "ok"){
                let arraydatos = resultObj.data;

            let titulo="<h1 style=text-align:center;>Productos</h1> <br> <h5 style=text-align:center;>Verás aquí todos los productos de la categoría: Auto </h5>";
            document.getElementById("Autos").innerHTML=titulo;

               for (i = 0; i <= 4; i++) {
 
                let array= arraydatos.products[i];

               let datos=Object.values(array);

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