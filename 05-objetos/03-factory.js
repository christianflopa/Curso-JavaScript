function crearUsuario (email,name) {
    return {
        email,//Cuando la propiedad se llama igual al parámetro de la función, solo se escribe el parámetro de la función al que corresponda
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando Clave')
        },
    }
}
let user = crearUsuario('christianflopa@gmail.com','Christian')
console.log(user)