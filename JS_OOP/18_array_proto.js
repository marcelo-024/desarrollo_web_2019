const aDatos = ['jose','luis','martinez','robledo']

console.log(aDatos.__proto__)
console.log(Array.prototype)


Array.prototype.saludar = function () {

    console.log('Hola')
}
Array.prototype.push = function (nombre) {
    console.log(nombre + ', ¿qué tal?')
}

aDatos.push('Ernesto')

aDatos.saludar()

console.log(aDatos)