function Usuario (nombre) {
    this.nombre = nombre
}

console.log(Usuario.name)  //Las funciones son objetos, por esto mismo tienen propiedades
console.log(Usuario.length)

const U = Usuario //Las Funciones pueden ser asignadas a variables o constantes, pero se asignan colocando solo el nombre, ya que no se está invocando la ejecución de la función
let user = new U('Christian') //Podemos invocar la función que fué asignada a una variable, al ser constructora, se utiliza la palabra reservada NEW

console.log(user)

function of(Fn, arg) {
    return new Fn(arg) //Una función puede ser un argumento de otra función, además, las funciones pueden retornar un objeto creado por una función que fue asignada como argumento

}

let user1 = of(Usuario, 'Floresx') //Pasamos como argumento el nombre de la función
console.log(user1)

function retornar() { //Una funcion también puede retornar otra función
    return function () { //Función anónima al no tener un name asignado
        console.log('Hola Mundo')
    }
}

let saludo = retornar()
saludo()