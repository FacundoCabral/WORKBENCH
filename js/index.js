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
    document.getElementById("nombreUsuario").innerHTML=`${Username}`;
   
});