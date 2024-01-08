let array = [2,6,7,15,-5,-101,55]

function getMenorMayor (array) {
    let mayor = array[0] //Declaramos las variables como el primer elemento del array, para evitar valores invalidos
    let menor = array[0]
    for (numero of array) {
        menor = menor < numero ? menor : numero
        mayor = mayor > numero ? mayor : numero
    }
    return [menor, mayor]
}

let numeros = getMenorMayor(array)
console.log(numeros)