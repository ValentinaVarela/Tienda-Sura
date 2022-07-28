//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS

//1. CONTROLANDO EL CONTENIDO
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")

//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA (ELEMENTO)
etiquetaTitulo.textContent="La noche tiene la forma de lo que te falta"

//1.2 MANIPULANDO EL SRC
etiquetaImagen.src="https://i.ytimg.com/vi/W3Ia4FLDraQ/maxresdefault.jpg"

//2. CONTROLANDO EL DISEÑO 
let parrafo=document.getElementById("parrafo")
parrafo.textContent="“Qué buen insomnio si me desvelo sobre tu cuerpo”"

//2.1 AGREGANDO UN ESTILO (CLASS)
//text_danger
parrafo.classList.add("text-danger", "fs-1", "text-center")
etiquetaImagen.classList.add("d-block", "mx-auto")

//2.2 QUITANDO UN ESTILO
parrafo.classList.remove("text-danger")