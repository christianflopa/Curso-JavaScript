// Personaje de TV

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16

let personaje = {
    nombre: "Tanjiro", //Par Llave - Valor o tambien llamado Propiedad de objeto
    anime: "demon slayer",
    edad: 16,
}; //Objeto Literal

console.log(personaje)
console.log(personaje.nombre)
console.log(personaje['edad'])

personaje.edad = 17;
personaje['edad'] = 12; //Esta manera funciona para iterar mediante una variable, ejemplo: let propiedad = edad; personaje[propiedad] = 12

delete personaje.anime;

console.log(personaje) 