function Punto (x, y) {
    this.x = x
    this.y = y
    this.dibujar = function () { console.log('Dibujando...') }
}

let punto = { z:2 }
Punto.call(punto, 1 , 2)//El método .call, permite cambiar el contexto de .this, mandando un objeto previamente creado, para de esta manera, extender el objeto ya creado con las propiedades nuevas de la función
Punto.apply(punto, [1, 2])//El método .apply, hace lo mismo que .call, pero los argumentos de la función, son mandados en forma de Array

console.log(punto)

//Las funciones pueden ser creadas mediante el constructor Function(), pero esto es una mala práctica
/* 
    Para crear funciones mediante el constructor, primero se le mandan los argumentos que tendrá la función,
    seguido de ello utilizando los backticks escribimos el código de la función
 */
const Point = new Function('x', 'y', `
    this.x = x
    this.y = y
    this.dibujar = function() { console.log('Dibujando...') }
`)