let Email;
let userMail;
let Contra;


document.addEventListener("DOMContentLoaded",function(){ //Esto lo hacemos para que si algún elemento tiene async o algo raro , no tener problemas.
    
document.getElementById("buttonLogin").addEventListener("click",function(){

Email = document.getElementById("emailUser").value;
userMail = localStorage.setItem("UserMail", Email);
Contra = document.getElementById("cn").value;
    
if (Email =="" && Contra=="") {
    document.getElementById("container").innerHTML=`<div class="alert alert-danger alert-dismissible" role="alert">
    <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="alert"></button>
    Por favor complete su Email y Contraseña
    </div>`;

}else if (Email ==""){
    document.getElementById("container").innerHTML=`<div class="alert alert-danger alert-dismissible" role="alert">
    <button type="button" class="btn-close" aria-label="Close"  data-bs-dismiss="alert"></button>
    Por favor complete su Email
    </div>`;
}
else if (Contra=="") {
    document.getElementById("container").innerHTML=`<div class="alert alert-danger alert-dismissible" role="alert">
    <button type="button" class="btn-close" aria-label="Close"  data-bs-dismiss="alert"></button>
    Por favor complete su Contraseña
    </div>`;
}else{
    window.location = "portada.html" //renombramos a index.html como portada.html
    localStorage.setItem("ids","50924")
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




