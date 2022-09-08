let productos=[
    {
        nombre:"BLACK CAMIBUZO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/1.webp?alt=media&token=6e316aca-79f7-4cfe-b0ca-e47f2d61ad20", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/1.2.webp?alt=media&token=bb5c22d8-3e70-482d-b8c9-64a9bf13c823"],
        precios:10.21,
        popularidad:5,
        descripcion:"High neck t-shirt with cut-out asymmetric hem"
    },
    {
        nombre:"OPEN CROT TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/2.webp?alt=media&token=c97633d6-32ab-4169-a3ff-78eb1aa9948f", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/2.1.webp?alt=media&token=39a69557-8fae-4e62-a300-7935ae54d23d"],
        precios:5.67,
        popularidad:3,
        descripcion:"Solid Color Cross Strap Open Back Drawstring Crop Halter Top"
    },
    {
        nombre:"SHORT TUBE TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/3.webp?alt=media&token=5c313996-b2a1-4a84-94cd-35d24164d909", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/3.1.webp?alt=media&token=436a1fa5-bd19-46dd-9b03-318b94bbf235"],
        precios:7.94,
        popularidad:5,
        descripcion:"Unicolor short tube top"
    },
    {
        nombre:"CROPPED CHAIN TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/4.webp?alt=media&token=066d6c12-97e5-434f-82a9-a8bfe55dd16c", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/4.1.webp?alt=media&token=006a7321-0d4d-401f-8c8b-7dd487e08384"],
        precios:9.08,
        popularidad:5,
        descripcion:"Asymmetric Chain Crop Top"
    },
    {
        nombre:"TOP KNOT",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/5.webp?alt=media&token=bb34eccf-dcc3-40f8-bb1b-354d63600c29", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/5.1.webp?alt=media&token=4511c928-3eae-4173-b9a3-720e62514c51"],
        precios:4.54,
        popularidad:3,
        descripcion:"Drawstring Knot Front Bandeau Top"
    },
    {
        nombre:"BANDEAU TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/6.webp?alt=media&token=6c639c8c-a133-489d-9ec8-2f230d522d33", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/6.1.webp?alt=media&token=1b91964c-a9d0-424e-b156-2ed3d051a13c"],
        precios:5.67,
        popularidad:4,
        descripcion:"Textured Hanky Hem Bandeau Top"
    },
    {
        nombre:"PLAIN GLAMOR SHEER TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/7.webp?alt=media&token=9740dd49-000c-4791-bb85-879572bb31ee", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/7.1.webp?alt=media&token=478c50c9-ee11-42fc-b161-39ac4094e4a4"],
        precios:9.08,
        popularidad:5,
        descripcion:"Women's Tops Transparent Plain Glamor"
    },
    {
        nombre:"CROP TOP WITH SCOOP NECK",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/8.webp?alt=media&token=b04761e9-b739-44ea-82ec-efeca01b85a9", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/8.1.webp?alt=media&token=c5d636a6-bb51-4560-b173-29b89b5ac67d"],
        precios:5.67,
        popularidad:2,
        descripcion:"Solid Scoop Neck Crop Top"
    },
    {
        nombre:"PLAIN TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/9.webp?alt=media&token=696aae70-80eb-4197-8a20-aba6a25fc253", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/9.1.webp?alt=media&token=6cba7cc1-d2f9-477f-9107-66e97a26b4e5"],
        precios:4.54,
        popularidad:2,
        descripcion:"Women's Tops Ribbed Solid Sexy"
    },
    {
        nombre:"OPEN NECK TOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/10.webp?alt=media&token=732d603c-0c3c-4c6a-9618-da826b9dc00f", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/10.1.webp?alt=media&token=8564372a-f786-42e0-9646-dd75d4b61b3a"],
        precios:7.94,
        popularidad:5,
        descripcion:"Asymmetric Neck Top With Letter Patch"
    }
]

let fila=document.getElementById("fila")

//RECORRIENDO EL ARREGLO
productos.forEach(function(producto){
    
    //creando un div desde JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creando una tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100","p-5")

    //creando una imagen
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=producto.fotos[0]

    //detectando evento de mouse
    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })
    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })

    imagen.addEventListener("click",function(){
        imagen.src=producto.fotos[0]
    })

    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //crear el precio
    let precio=document.createElement("h2")
    precio.textContent="US$ "+producto.precios


    
  // Creating a popularity
  let popularidad = document.createElement("h4");
  popularidad.classList.add("d-none");
  popularidad.textContent = producto.popularidad;

  //Creating a stars
  let contendorstars = document.createElement("div");
  for (let i = 1; i <= producto.popularidad; i++) {
    let stars = document.createElement("i");
    stars.classList.add("bi", "bi-star-fill", "text-warning");
    contendorstars.appendChild(stars);
  }


    //creando la descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger")
    descripcion.textContent=producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(popularidad);
    tarjeta.appendChild(contendorstars);
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})