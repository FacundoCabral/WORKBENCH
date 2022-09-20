document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    Username = localStorage.getItem("UserMail");  //Tomamos del localStorage el value = mail q pone usuario.
    document.getElementById("nombreUsuario").innerHTML=`
 

<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
  ${Username}
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
  <li><a href="index.html">
  <button onclick="cerrarSesion()" class="dropdown-item">Cerrar Sesión</button></a> </li>
  </ul>
</div>
    `;
   
});
function cerrarSesion() {
    localStorage.removeItem('UserMail');
}