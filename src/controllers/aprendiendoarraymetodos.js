let productos=[
    {
        nombre:"CAMIBUZO NEGRO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/1.webp?alt=media&token=6e316aca-79f7-4cfe-b0ca-e47f2d61ad20", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/1.2.webp?alt=media&token=bb5c22d8-3e70-482d-b8c9-64a9bf13c823"],
        precios:45000,
        popularidad:5,
        descripcion:"Camiseta de cuello alto con abertura bajo asimétrico"
    },
    {
        nombre:"TOP CROT ABIERTO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/2.webp?alt=media&token=c97633d6-32ab-4169-a3ff-78eb1aa9948f", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/2.1.webp?alt=media&token=39a69557-8fae-4e62-a300-7935ae54d23d"],
        precios:25000,
        popularidad:6,
        descripcion:"Top halter corto unicolor con tira cruzada de espalda abierta con cordón"
    },
    {
        nombre:"TOP TUBO CORTO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/3.webp?alt=media&token=5c313996-b2a1-4a84-94cd-35d24164d909", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/3.1.webp?alt=media&token=436a1fa5-bd19-46dd-9b03-318b94bbf235"],
        precios:35000,
        popularidad:8,
        descripcion:"Top tubo corto unicolor"
    },
    {
        nombre:"TOP CORTO CADENA",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/4.webp?alt=media&token=066d6c12-97e5-434f-82a9-a8bfe55dd16c", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/4.1.webp?alt=media&token=006a7321-0d4d-401f-8c8b-7dd487e08384"],
        precios:40000,
        popularidad:10,
        descripcion:"Top corto con diseño de cadena asimétrico"
    },
    {
        nombre:"TOP NUDO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/5.webp?alt=media&token=bb34eccf-dcc3-40f8-bb1b-354d63600c29", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/5.1.webp?alt=media&token=4511c928-3eae-4173-b9a3-720e62514c51"],
        precios:20000,
        popularidad:5,
        descripcion:"Top bandeau con nudo delantero con cordón"
    },
    {
        nombre:"TOP BANDEAU",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/6.webp?alt=media&token=6c639c8c-a133-489d-9ec8-2f230d522d33", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/6.1.webp?alt=media&token=1b91964c-a9d0-424e-b156-2ed3d051a13c"],
        precios:25000,
        popularidad:7,
        descripcion:"Top bandeau con textura bajo hanky"
    },
    {
        nombre:"TOP TRANSPARENTE LISO GLAMOUR",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/7.webp?alt=media&token=9740dd49-000c-4791-bb85-879572bb31ee", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/7.1.webp?alt=media&token=478c50c9-ee11-42fc-b161-39ac4094e4a4"],
        precios:40000,
        popularidad:10,
        descripcion:"Tops de mujeres Transparente Liso Glamour"
    },
    {
        nombre:"TOP CORTO CUELLO SCOOP",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/8.webp?alt=media&token=b04761e9-b739-44ea-82ec-efeca01b85a9", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/8.1.webp?alt=media&token=c5d636a6-bb51-4560-b173-29b89b5ac67d"],
        precios:25000,
        popularidad:10,
        descripcion:"Top corto de cuello scoop unicolor"
    },
    {
        nombre:"TOP LISO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/9.webp?alt=media&token=696aae70-80eb-4197-8a20-aba6a25fc253", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/9.1.webp?alt=media&token=6cba7cc1-d2f9-477f-9107-66e97a26b4e5"],
        precios:20000,
        popularidad:15,
        descripcion:"Tops de mujeres Canalé Liso Sexy"
    },
    {
        nombre:"TOP CUELLO DESCUBIERTO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/10.webp?alt=media&token=732d603c-0c3c-4c6a-9618-da826b9dc00f", "https://firebasestorage.googleapis.com/v0/b/tiendasuravv.appspot.com/o/10.1.webp?alt=media&token=8564372a-f786-42e0-9646-dd75d4b61b3a"],
        precios:35000,
        popularidad:15,
        descripcion:"Top de cuello asimétrico con parche de letra"
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

    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //crear el precio
    let precio=document.createElement("h2")
    precio.textContent="$"+producto.precios

    //creando la descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger")
    descripcion.textContent=producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})