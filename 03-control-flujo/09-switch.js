let accion = 'listar'

switch (accion) {
    case 'listar':
        console.log('Acción de listar')
        break
    case 'guardar':
        console.log('Acción de guardar')
        break
    default: //Default se ejecuta cuando la variable no coincide con ninguno de los Case disponibles
        console.log('Acción no reconocida')
}