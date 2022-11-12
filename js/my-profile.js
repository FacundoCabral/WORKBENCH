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
let imagen= localStorage.getItem("imagenCodificada");



function debeEstarLoagueado() {
    if (userMail==null) {
        window.location.href="index.html"
    }else{console.log("Está logged");}
}

function valoresDefault() {
   document.getElementById("inputEmail").value=userMail
   if (imagen !==null) {
    document.getElementById("traerImg").innerHTML=imagen
   }
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
    document.getElementById("container").innerHTML+=`<div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="alert"></button>
Todo salió correctamente !
</div>`

    


}else{document.getElementById("container").innerHTML+=`<div class="alert alert-danger alert-dismissible" role="alert">
<button type="button" class="btn-close" aria-label="Close"  data-bs-dismiss="alert"></button>
Debe completar los campos obligatorios (*)
</div>`

}
    
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


function codificadorImagen() {
   

    let fileSeleccionado = document.getElementById("file").files;

    console.log(fileSeleccionado);
    
    let imagenSeleccionada=fileSeleccionado[0]

      let fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {

        let srcData = fileLoadedEvent.target.result; // <--- data: base64

        let newImage = document.createElement('img');

        newImage.src = srcData;

        console.log(newImage);

        localStorage.setItem("imagenCodificada",newImage.outerHTML)

        document.getElementById("traerImg").innerHTML =newImage.outerHTML;

        console.log(newImage.outerHTML);

    }
        
        fileReader.readAsDataURL(imagenSeleccionada);
    
    }
