let idObjeto = localStorage.getItem("idObjeto");
let url = "https://japceibal.github.io/emercado-api/products/" + `${idObjeto}` + ".json";
let urlComentarios = "https://japceibal.github.io/emercado-api/products_comments/" + `${idObjeto}` + ".json";
let objetoProducto;
let objetoComentarios;
let score;
let estrellas;
let hoy;
let objetoProducto1;
let url2;

document.addEventListener("DOMContentLoaded", function () {

    loadPage(url)

})//Termina DOMContentLoaded y cierra funcion de dentro.

function loadPage(url) {
        
    fetch(url)
        .then(response => response.json()) // transformamos el response q nos devuelve el fetch en un objeto js
        .then(data => objetoProducto = data)//la promesa response.json nos devuelve un objeto llamado data y ese lo guardamos en objetoProducto
        .then(objetoProducto => agregarProductoHTML())
        .then(miJSONDATA)
        .then(comentar)
        .then(prodRelacionados)
        
    }


function agregarProductoHTML() {

    document.getElementById("contenedorProductos").innerHTML ="";

    agregar =`
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
<h4><strong>imágenes ilustrativas:</strong></h4>
</div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    
<div class="container uno">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="${objetoProducto.images[0]}" class="d-block w-100 ">
        
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="${objetoProducto.images[1]}" class="d-block w-100 ">
      </div>
      <div class="carousel-item">
        <img src="${objetoProducto.images[2]}" class="d-block w-100 ">
      </div>
      <div class="carousel-item">
        <img src="${objetoProducto.images[3]}" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  <div class="container" id="comentariosUsers">
<h3 class="Comentarios">Cometarios</h3>
</div>
</div>
</div>
</div>`

    document.getElementById("contenedorProductos").innerHTML += agregar;
}


function miJSONDATA(){ 
    fetch(urlComentarios)
    .then(response => response.json()) // transformamos el response q nos devuelve el fetch en un objeto js
    .then(data => objetoComentarios = data)//la promesa response.json nos devuelve un objeto llamado data y ese lo guardamos en objetoProducto
    .then(objetoComentarios=>comentarios(urlComentarios));}


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
`}else{estrellas=` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
`

}
}

function comentarios(urlComentarios) {

    document.getElementById("comentariosUsers").innerHTML +="";

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
document.getElementById("comentariosUsers").innerHTML += agregarComentario;
}}
   
// Me queda terminar Pauta 4 y desafío.



function comentar() {
let agregarComentar=` <h3 class="Comentarios">Cometarios</h3>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Tu opinión:</label>
  <textarea class="form-control" id="comentarioUsuario" rows="3"></textarea>
</div>
<select class="form-select" aria-label="Default select example" id="rateUser">
  <option selected>Elige tu puntuación</option>
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
<br>
<div class="col-auto">
    <button type="button" id="botonComentarios" class="btn btn-primary mb-3">Enviar</button>
  </div>

`
document.getElementById("contenedorProductos").innerHTML += agregarComentar;

document.getElementById("botonComentarios").addEventListener("click",function () {

    let comentarioUsuario=document.getElementById("comentarioUsuario").value;
    let rateUser=document.getElementById("rateUser").value;
    calcStars(rateUser);
    fechaHOY();

    let nuevoComentario=`<div class="container" id="contenedorComentarios">
    <ul class="list-group">
           <li class="list-group-item"> 
           <strong>${localStorage.getItem("UserMail")}</strong> - ${hoy} - ${estrellas}
           <br>
           ${comentarioUsuario}
           </li>
   </ul>
       </div>

    
    `

document.getElementById("comentariosUsers").innerHTML += nuevoComentario
})}

//Creo funcion productos Relacionados
function prodRelacionados() {

    document.getElementById("Relacionados").innerHTML ="";

let prod=`<hr>
<div class="container Comentarios"><h4>Productos Relacionados</h4>
<div class="row Comentarios" id="productosRelacionados">
</div>
</div>`;

document.getElementById("Relacionados").innerHTML +=prod

    for (let i = 0; i < objetoProducto.relatedProducts.length; i++) {

      let id=objetoProducto.relatedProducts[i].id;  

 prodRel=`
    <div class="col-4" id="${objetoProducto.relatedProducts[i].id}" onclick="Redirigir(${(id)})"><a href="#contenedorProductos">
        <img src="${objetoProducto.relatedProducts[i].image}" class="img-thumbnail imagenesRelacionadas"></img>
        <p class="nombres">${objetoProducto.relatedProducts[i].name}</p></a>

    </div>
    `

            document.getElementById("productosRelacionados").innerHTML +=prodRel;
        }}
 
//Creo función xa obtener la fecha

function fechaHOY() {
    let fecha = new Date();
     hoy= `${fecha.getFullYear()}-${("0" + (fecha.getMonth() + 1)).slice(-2)}-${("0" + fecha.getDate()).slice(-2)} ${fecha.getHours()}:${fecha.getMinutes()}:${("0" + fecha.getSeconds()).slice(-2)}`
     console.log(hoy);
}

function Redirigir(id) {  // Creo funciòn redirigir xa q cree la url cuando el usuario da click en algún objeto
    //llama a la función q carga la página.

    url2 = "https://japceibal.github.io/emercado-api/products/" + `${id}` + ".json";
    urlComentarios="https://japceibal.github.io/emercado-api/products_comments/" + `${id}` + ".json";


    loadPage(url2)
    

} 
