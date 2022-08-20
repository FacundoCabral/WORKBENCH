//Le asignamos id="emailUser" , id="buttonLogin" e id="cn" al div del html, xa poder usarlo con DOM 

document.addEventListener("DOMContentLoaded",function(){ //Esto lo hacemos para que si algún elemento tiene async o algo raro , no tener problemas.
    document.getElementById("buttonLogin").addEventListener("click",function(){

let Email = document.getElementById("emailUser").value;
let Contra = document.getElementById("cn").value;
    
if (Email =="" && Contra=="") {
    alert("Por favor complete su Email y Contraseña");
    document.getElementById("emailUser").innerHTML="style=background-color:red";
    document.getElementById("cn").innerHTML="style=background-color:red";
    console.log(emailUser)
}else if (Email ==""){
    alert("Por favor complete su Email")
}
else if (Contra=="") {
    alert("Por favor complete su Contraseña")
}else{
    window.location = "index.html"
}
})})