let array = [2,6,7,15,-5,-101,55]

function totalPositivos(array) {
    let contadorPositivos = 0
    for (numero of array) {
        if (numero > 0)
            contadorPositivos++
    }
    return contadorPositivos
}

let resultado = totalPositivos(array)
console.log(resultado)