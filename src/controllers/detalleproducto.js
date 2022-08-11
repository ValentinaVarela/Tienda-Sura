console.log("Hello I am detailing the purchase")

//call memory
let product=JSON.parse(localStorage.getItem("product"))
console.log(product)

//reference the product image
let foto=document.getElementById("imageInfo")
foto.src=product.foto

let nombre=document.getElementById("nameInfo")
nombre.textContent=product.nombre

let precio=document.getElementById("priceInfo")
precio.textContent=product.precio

let descripcion=document.getElementById("descriptionInfo")
descripcion.textContent=product.descripcion