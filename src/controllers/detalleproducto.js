console.log("Hello I am detailing the purchase")

//call memory
let product=JSON.parse(localStorage.getItem("product"))
console.log(product)

let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria)

//reference the product image
let foto=document.getElementById("imageInfo")
foto.src=product.foto

let nombre=document.getElementById("nameInfo")
nombre.textContent=product.nombre

let precio=document.getElementById("priceInfo")
precio.textContent=product.precio

let descripcion=document.getElementById("descriptionInfo")
descripcion.textContent=product.descripcion
    
  //Creating a popularity
  let popularidad = document.getElementById("popularityInfo");
  popularidad.classList.add("d-none");
  popularidad.textContent = product.popularidad;

  //Creating a stars
  let contendorstars = document.getElementById("containerstars");
  for (let i = 1; i <= product.popularidad; i++) {
    let stars = document.createElement("i");
    stars.classList.add("bi", "bi-star-fill", "text-warning");
    contendorstars.appendChild(stars);
  }




let pildora=document.getElementById("pildora")
console.log(pildora.textContent)

//escucho el click en el boton añadir al carrito
let botoncarrito=document.getElementById("botonAgregarCarrito")
botoncarrito.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    console.log("agregaste",cantidad)

    //agregamos la cantidad al objeto producto
    product.cantidad=cantidad
    console.log(product)

    //agregamos el producto al carrito de compras
    carrito.push(product)
    console.log(carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //pintando la pildora con la cantidad de productos
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito
})