//CREANDO VARIABLES

/*let nombreUsuario="Valentina Varela"
const EDAD_USUARIO=17
let estaturaUsuario=1.60

console.log(nombreUsuario)

console.log(EDAD_USUARIO)*/


//MERCANDO CON EL PROFE
let producto1="arroz"
let producto2="leche"
let producto3="huevo"
let producto4="carne de cerdo"
let producto5="pollo"
let producto6="galleta"
let producto7="panela"
let producto8="cafe"
let producto9="tapa roja"
let producto10="cerveza"
let producto11="tomate"
let producto12="papas"
let producto13="lechuga"
let producto14="frijoles"
let producto15="aceite"

//ARREGLOS DE DATOS//
//un arreglo es una variable especial
//1. ARREGLO TRADICIONAL:
let numeros=[1,2,8,9,45]
let nombres=["Juan", "Catalina", "Mario", "Carlos"]
let contagios=[true, false, false, false, true]
//1.1 accediendo a todos los datos (elementos) de un arreglo
console.log(numeros)
//1.2 accediendo a un solo elemento del arreglo
console.log(numeros[3])

//2. ARREGLOS ORIENTADOS A OBJETOS ARREGLOS POO
let notas=Array(3.5,2.8,3.9,5)
console.log(notas)
console.log(notas[1])

//3. VARIABLES ESPECIALES PARA GUARDAR VARIOS DATOS DE TIPOS DIFERENTES
//OBJETOS
let persona={
    nombre:"Yulieth Valentina",
    apellidos:["Varela", "Castaño"],
    edad:17,
    hinchaDelMejor:true
}
//3.1 accediento a todos los datos de un objeto
console.log(persona)
//3.2 accediendo a un solo atributo del objeto
console.log(persona.nombre)
console.log(persona.apellidos[0])