let userMail=localStorage.getItem("UserMail");
let primerNombre;
let segundoNombre;
let primerApellido;
let segundoApellido;
let telContacto;
let nombreIngresado;
let nombreIngresado2;
let apellidoIngresado;
let apellidoIngresado2;



function debeEstarLoagueado() {
    if (userMail==null) {
        window.location.href="index.html"
    }else{console.log("Está logged");}
}

function valoresDefault() {
   document.getElementById("inputEmail").value=userMail
}

function guardarDatos() {
    primerNombre=document.getElementById("primerNombre").value;
    segundoNombre=document.getElementById("segundoNombre").value;
    primerApellido=document.getElementById("primerApellido").value;
    segundoApellido=document.getElementById("segundoApellido").value;
    telContacto=document.getElementById("telContacto").value;

    if (primerNombre !== "" && primerApellido !== "") {
    localStorage.setItem("primerNombre",primerNombre);
    localStorage.setItem("segundoNombre",segundoNombre);
    localStorage.setItem("primerApellido",primerApellido);
    localStorage.setItem("segundoApellido",segundoApellido);
    localStorage.setItem("telContacto",telContacto);


}else{alert("Debe completar los campos obligatorios(*)")}
    
}

function postDatos() {

nombreIngresado=localStorage.getItem("primerNombre");
apellidoIngresado=localStorage.getItem("primerApellido");  
apellidoIngresado2=localStorage.getItem("segundoApellido");  
nombreIngresado2=localStorage.getItem("segundoNombre");
telContacto=localStorage.getItem("telContacto"); 

document.getElementById("primerNombre").value=nombreIngresado;
document.getElementById("primerApellido").value=apellidoIngresado;  

if (apellidoIngresado2!=="" || nombreIngresado2!=="" || telContacto!=="") {
document.getElementById("segundoNombre").value=nombreIngresado2;
document.getElementById("segundoApellido").value=apellidoIngresado2;
document.getElementById("telContacto").value=telContacto;

}

}

document.addEventListener("DOMContentLoaded",()=>{

debeEstarLoagueado()

valoresDefault()

document.getElementById("botonCambios").addEventListener("click",guardarDatos)

postDatos()


})
