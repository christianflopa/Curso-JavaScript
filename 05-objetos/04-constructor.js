function Usuario() { //Para crear funciones constructoras la convención es UpperCamelCase
    this.id = 1
    this.recuperarClave = function() {
        console.log('Recuperando clave...')
    }
}

let user = new Usuario() //Al usar la palabra reservada New, se crea un objeto vacio que se vincula con el prototipo de la función y ese objeto toma el valor de this.
console.log(user)