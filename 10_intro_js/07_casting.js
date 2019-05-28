'use strict'

//OPERACIONES CON NUMBERS
let x = 2
let y = 3
let z = x * y



//OPERACIONES CON NUMBERS Y STRINGS

y = '3'
z = x * y
x = '5'
z = x * y


console.log(z, typeof z)// 6  number
console.log(x, typeof x)// string
console.log(y, typeof y)// string



/* SOBRECARGA DEL SIMBOLO + (INDICANDO EL ORDEN DE PREVALENCIA) 



+3 (Asignación de símbolo)

'Hola' + 'Pepe' (Concatenación)

2+2 (Suma)

*/

let w = x + y //Esta suma de strings no da 8, si no '53' por la concatenación.


x = 23
y = '20'
w = x + y// w = '2320' en modo string

console.log (w, typeof w)


/**
 * not !
 * OR ||
 * AND &&
 * 
 * 
 * 
 */



function sumar (a = 0,b = 0) {
    /* if (typeof a != 'number' || typeof b != 'number'){
        return 'No se puede sumar'

    } */
    if (isNaN (a) || isNaN(b) || typeof a == 'boolean' || typeof b == 'boolean' || typeof a == 'object'|| Array.isArray (b)) {
        return 'No se puede sumar'
    }

    let r = Number(a) + Number(b) //forzar el casting mediante Number
   /* let r = parseFloat(a) + parseFloat(b)  */
  /*  let r = +a + +b  *//// Aprovechando la sobrecarga del signo +
   return 'La suma es = ' + r
}

console.log(sumar())
console.log(sumar(2))//devuelve 'no se puede sumar' si no hay valores por defecto debido al valor undefined del segundo parámetro
console.log(sumar(undefined,undefined))
console.log(sumar(2,2)) //4

console.log(sumar(2,0)) //2

console.log(sumar(0,2)) // 2

console.log(sumar(2,'5')) // 25 por concatenacion (bajo la funcion sumar(a,b){return a + b})

console.log(sumar('4','5'))

console.log(sumar(2,'Pepe')) // 
console.log (sumar('pepe','Juan'))

console.log(sumar(2,true)) //3 al castear true a numérico devuelve 1

console.log(sumar(2,false)) // 2

console.log(sumar({},{}))
console.log(sumar([],[]))
