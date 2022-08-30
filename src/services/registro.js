import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonregistro=document.getElementById("botonregistro")

botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()

    let Email=document.getElementById("Email").value
    let Password=document.getElementById("Password").value

    console.log(Email,Password)

    const auth = getAuth();
createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert("Registro Exitoso")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("Ups Fallamos: "+errorMessage)
  });
})