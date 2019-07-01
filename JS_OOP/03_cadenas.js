'use strict'

let version = 'ES6'

let cadena = "Esto no es buena práctica"
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena = `Nuevo en ${version}` // Template String

console.log(cadena, otraCadena, nuevaCadena)

console.log(cadena.toUpperCase())//.toUpperCase es un objeto envolvente

console.log(otraCadena.length)//length es una propiedad de las cadenas
console.log(cadena[0])

for (let i = 0; i < cadena.length; i++) {
    
    const item = cadena[i];
    console.log(item)
    
}

let x = cadena.split(' ').join('//').toUpperCase()
console.log(x)

/* cadena.slice()
cadena.substr()
cadena.substring()


cadena.match()
cadena.search()
cadena.replace()

cadena.indexOf(clave)
cadena.lastIndexOf(clave)

cadena.charAt(posicion)
cadena.charCodeAt(posicion)

String.fromCharCode(num) */





let numero = 23.64984658

console.log(numero)

console.log(numero.toString())
console.log(numero.toFixed(2))
console.log(numero.toPrecision(4))
console.log(numero.toExponential())




