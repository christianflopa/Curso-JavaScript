const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log('dibujando')
    }
}
//delete punto.dibujar
if ('dibujar' in punto) {
    punto.dibujar()
} else {
    console.log('Propiedad no existente')
}

console.log(Object.keys(punto))

for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave])
}

for (let entry of Object.entries(punto)) {
    console.log(entry)
}

for (let llave in punto) {
    console.log(llave, punto[llave])
}
