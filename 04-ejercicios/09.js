let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}],
]

function toCollection (arr) {
    let coleccion = []
    for (idx in arr) {
        let elemento = arr[idx]
        coleccion[idx] = elemento[1]
        coleccion[idx].id = elemento[0]
        /* coleccion[idx] = {
            id: par[0],
            name: par[1].name
        }*/
    } 
    return coleccion
}

let resultado = toCollection(pairs)
console.log(resultado)