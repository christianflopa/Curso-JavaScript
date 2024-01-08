function getByIdx(array, indice) {
    if (indice > 0 && indice < array.length)
        return array[indice]
    else
        return 'Indice fuera de límite'
}

let elemento = getByIdx ([1,44,646,12,6], 5)
console.log(elemento)