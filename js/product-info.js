let idObjeto = localStorage.getItem("idObjeto");
let url = "https://japceibal.github.io/emercado-api/products/" + `${idObjeto}` + ".json";
let urlComentarios = "https://japceibal.github.io/emercado-api/products_comments/" + `${idObjeto}` + ".json";
let objetoProducto;
let objetoComentarios;
let score;
let estrellas;

document.addEventListener("DOMContentLoaded", function () {

    function agregarProductoHTML() {
        agregar = `
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

    <h3 class="Comentarios">Cometarios</h4>

    </div>
    </div>
    </div>
        </div>
   `
        document.getElementById("contenedorProductos").innerHTML += agregar;
    }

    fetch(url)
        .then(response => response.json()) // transformamos el response q nos devuelve el fetch en un objeto js
        .then(data => objetoProducto = data)//la promesa response.json nos devuelve un objeto llamado data y ese lo guardamos en objetoProducto
        .then(objetoProducto => agregarProductoHTML())
        .then(miJSONDATA);

    function miJSONDATA(){ 
        fetch(urlComentarios)
        .then(response => response.json()) // transformamos el response q nos devuelve el fetch en un objeto js
        .then(data => objetoComentarios = data)//la promesa response.json nos devuelve un objeto llamado data y ese lo guardamos en objetoProducto
        .then(objetoComentarios=>comentarios(urlComentarios));}

        
})//Termina DOMContentLoaded y cierra funcion de dentro.
//Creo función xa calcular estrellas, es bastante bruta , seguro se puede mejorar.
function calcStars(score) {
    if (score==5) {
    estrellas=` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    `
    } else if (score==4) {estrellas=` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        `}else if(score==3){estrellas=` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
 `}else if(score==2){estrellas=` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star"></span>
 <span class="fa fa-star"></span>
 <span class="fa fa-star"></span>
`
}else if(score==1){
    estrellas=` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
`}
console.log(estrellas);}

function comentarios(urlComentarios) {

    for (let i = 0; i < objetoComentarios.length; i++) {

          score= parseInt(objetoComentarios[i].score);
          calcStars(score)
    agregarComentario= `<div class="container" id="contenedorComentarios">
         <ul class="list-group">
                <li class="list-group-item"> 
                <strong>${objetoComentarios[i].user}</strong> - ${objetoComentarios[i].dateTime} - ${estrellas}
                <br>
                ${objetoComentarios[i].description}
                </li>
        </ul>
            </div>
`
//comentar();
document.getElementById("contenedorProductos").innerHTML += agregarComentario;
}}
   
// Me queda terminar Pauta 4 y desafío.


function comentar() {
let agregarComentar=` <ul class="list-group">
<li class="list-group-item"> 
<strong>${objetoComentarios[i].user}</strong> - ${objetoComentarios[i].dateTime} - ${estrellas}
<br>
${objetoComentarios[i].description}
</li>
</ul>

`
    document.getElementById("contenedorComentarios").innerHTML += agregarComentar;
}
