const user  = { id: 1} //Al usar const, aun podemos modificar/agregar/eliminar las propiedades del objeto, pero no que deje de ser un objeto

user.name = 'Christian'
user.guardar = function () {
    console.log('Guardando ', user.name)
}

user.guardar()

delete user.name
delete user.guardar

console.log(user)

const user1 = Object.freeze({ id:1 })//Método .freeze no permite crear ni modificar propiedades
const user2 = Object.seal({ id:1 })//Método .seal permite modificar propiedades existentes, pero no deja crear nuevas
user1.name = 'Christian'
user1.id = 2
console.log(user1)