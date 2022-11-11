//Le asignamos id="emailUser" , id="buttonLogin" e id="cn" al div del html, xa poder usarlo con DOM 
/* const firebase= require("firebase"); */
document.addEventListener("DOMContentLoaded",function(){ //Esto lo hacemos para que si algún elemento tiene async o algo raro , no tener problemas.
    
    
    
    
    document.getElementById("buttonLogin").addEventListener("click",function(){

let Email = document.getElementById("emailUser").value;
let userMail = localStorage.setItem("UserMail", Email);
let Contra = document.getElementById("cn").value;
    
if (Email =="" && Contra=="") {
    alert("Por favor complete su Email y Contraseña");

}else if (Email ==""){
    alert("Por favor complete su Email")
}
else if (Contra=="") {
    alert("Por favor complete su Contraseña")
}else{
    window.location = "portada.html" //renombramos a index.html como portada.html
    localStorage.setItem("ids","50924")//Ultimo desafiate
}
})})

import "./firebase.js"

import {GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

 import {auth} from "./firebase.js"; 

const provider=new GoogleAuthProvider();

let botonGoogle= document.getElementById("btnGoogle");

botonGoogle.addEventListener("click",async (e)=>{

await signInWithPopup(auth,provider) 


})

// Creo q no funciona x cross origin , debo mirar si en casaa sigue el error



