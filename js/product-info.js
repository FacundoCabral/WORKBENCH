let idObjeto = localStorage.getItem("idObjeto");
let url = "https://japceibal.github.io/emercado-api/products/" + `${idObjeto}` + ".json";
let urlComentarios = "https://japceibal.github.io/emercado-api/products_comments/" + `${idObjeto}` + ".json";
let objetoProducto;
let objetoComentarios;
let score;
let estrellas;
let hoy;

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

    <div class="container" id="comentariosUsers">
    <h3 class="Comentarios">Cometarios</h3>
    </div>
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
        .then(miJSONDATA)
        .then(comentar)

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
console.log(nuevoComentario);

document.getElementById("comentariosUsers").innerHTML += nuevoComentario
})}

//Creo función xa obtener la fecha

function fechaHOY() {
    let fecha = new Date();
     hoy= `${fecha.getFullYear()}-${("0" + (fecha.getMonth() + 1)).slice(-2)}-${("0" + fecha.getDate()).slice(-2)} ${fecha.getHours()}:${fecha.getMinutes()}:${("0" + fecha.getSeconds()).slice(-2)}`
     console.log(hoy);
}

