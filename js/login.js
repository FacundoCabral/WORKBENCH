//Le asignamos id="emailUser" , id="buttonLogin" e id="cn" al div del html, xa poder usarlo con DOM 

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
/* 

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAV98k2Y79OAx6fVQUZrilykaj7r4R0kS8",
    authDomain: "e-mercado-fc.firebaseapp.com",
    projectId: "e-mercado-fc",
    storageBucket: "e-mercado-fc.appspot.com",
    messagingSenderId: "473749367843",
    appId: "1:473749367843:web:21e3acd1636df6cce75596"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
 */
//Autenticación mediante Firebase con Google como proveedor de identidad buscar textual en yt
