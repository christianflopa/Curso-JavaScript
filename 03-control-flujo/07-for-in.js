// Sirve para iterar las propiedades de un objeto

let user = {
    id: 1,
    name: 'Christian',
    age: 25,
}

for (let propiedad in user){
    console.log(propiedad, user[propiedad])
}

let animales = ['perro', 'gato', 'dragon']


// El for In puede usarse también en arrays, pero en vez de agarrar la propiedad, agarra el índice del array
// Para iterar arrays, la mejor práctica es  usar el for of
for (let indice in animales) {
    console.log(indice, animales[indice])
}