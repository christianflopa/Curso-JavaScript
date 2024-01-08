let longitudArray = 10

function crearArray (n) {
    let arr = []
    if (n <= 0) {
        return [];
    }
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1
    }
    return arr
}

let resultado = crearArray(longitudArray)
console.log(resultado)