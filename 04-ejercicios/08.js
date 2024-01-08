let array = [{
    id:1,
    name: 'Nicolas',
}, {
    id:2,
    name: 'Felipe',
}, {
    id:3,
    name: 'Chanchito',
}]

function toPairs(array) {
    let pairs = []
    for (idx in array) {
        let objeto = array[idx]
        pairs[idx] = [objeto.id, objeto]
    }
    return pairs
}

let resultado =  toPairs(array)
console.log(resultado)