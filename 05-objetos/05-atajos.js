let obj = new String('Christian')

console.log(obj)

function Usuario () {
    this.name = 'Christian'
}

const user = new Usuario() //Al crear un objeto mediante una función constructora, se debe utilizar la palabra reservada new
console.log(user.constructor)