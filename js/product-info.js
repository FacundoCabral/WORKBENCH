let idObjeto= localStorage.getItem("idObjeto");
let url="https://japceibal.github.io/emercado-api/products/"+`${idObjeto}`+".json";
let objetoProducto;

document.addEventListener("DOMContentLoaded",function() {
    
function agregarProductoHTML() {
    agregar=`
    <div class="container">
    <h1 id="p1" class="display-2" >${objetoProducto.name}</h1>
    <div class="container">
    <p><strong>Precio</strong></p>
    <p>${objetoProducto.currency} ${objetoProducto.cost}</p>
    <p><strong>Descripción</strong></p>
    <p>${objetoProducto.description}</p>
    <p><strong>Categoría</strong></p>
    <p>${objetoProducto.category}</p>
    <p><strong>Cantidad de vendidos</strong></p>
    <p>${objetoProducto.soldCount}</p>
    <p><strong>imágenes ilustrativas</strong></p>

    <div class="row">
    <img src="${objetoProducto.images[0]}" class="img-thumbnail i1">
    <img src="${objetoProducto.images[1]}" class="img-thumbnail i1">
    <img src="${objetoProducto.images[2]}" class="img-thumbnail i1">
    <img src="${objetoProducto.images[3]}" class="img-thumbnail i1">

    </div>
    </div>
    </div>
        </div>
   ` 
    document.getElementById("contenedorProductos").innerHTML+=agregar;
}

fetch(url)
.then(response=>response.json()) // transformamos el response q nos devuelve el fetch en un objeto js
.then(data=>objetoProducto=data)//la promesa response.json nos devuelve un objeto llamado data y ese lo guardamos en objetoProducto
.then(objetoProducto=> agregarProductoHTML())
})//Termina DOMContentLoaded y cierra funcion de dentro.
