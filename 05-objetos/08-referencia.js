//Los tipos primitivos guardan el valor en el bloque de memoria correspondiente
//Los tipos de referencia, guardan la dirección del contenido en el bloque de memoria correspondiente


let a = 1
let b = 2

b = a //Al igualar una variable a otra, lo que hace es copiar el contenido del bloque de memoria de la otra

console.log(a,b)

let obj1 = {}
let obj2 = {}

obj1 = obj2 //Al igualar un objeto con otro, no se copia el contenido del objeto, si no la dirección en memoria
obj2.propiedad = 1
console.log(obj1, obj2) //Por esto al imprimir ambos objetos, aunque solo se modificó uno, los dos arrojarán el mismo resultado

let num = 1

function sumar(n) {
    n++
}
sumar(num)
/* 
    Al llamar a la función sumar y mandar como argumento num, la función crea una nueva variable la cual es la
    descrita en el parámetro de la función "n" y copia el valor del argumento num, por eso al imprimir num después
    su valor no ha cambiado, ya que eran variables distintas.
*/
console.log(num)
let obj = { propiedad: 1}

function sumar(objeto) {
    objeto.propiedad++
}
sumar(obj)
/* 
    En el caso cuando un objeto es mandando como argumento, al ser el objeto de tipo referencia, lo que se copia
    en la variable creada del parámetro "objeto" es la referencia que contenía en memoria el objeto obj,
    por esta razón al imprimir el valor de obj, este si fue modificado, ya que ambos objetos tenían la misma dirección
    de referencia en memoria.
*/
console.log(obj)
