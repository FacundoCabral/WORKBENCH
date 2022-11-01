function debeEstarLoagueado() {
    let userMail=localStorage.getItem("UserMail");
    if (userMail==null) {
        window.location="login.html"
    }else{console.log("Está logged");}
}

document.addEventListener("DOMContentLoaded",()=>{
debeEstarLoagueado()
})
