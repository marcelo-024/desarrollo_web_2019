/**
 * JSDoc
 * @description Programa que calcula y muestra 
 *              si un número es par o impar
 */

/**
 * @description Función que comprueba si una expresión 
 *      es convertible a un número valido
 *      rechazando objects, arrays, booleans, null 
 *      undefined, '' y string no numéricos
 * @param {any} n 
 * @returns {boolean}
 */
function isValidNumber(n) {
    let r = true
    if (isNaN(n) || typeof n == 'boolean'
        || Array.isArray(n) || n === '' || n === null) {
        r = false
    }
    return r
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isEntero(n = 0) {
    return (parseInt(n) === parseFloat(n))
}

/**
 * @description Función que calcula si un número es par
 *     Puede devolver: -2, -1, true, false
 * @param {number}: n
 * @returns {*}
 * 
 */
function esPar(n) {
    let r = true
    if (!isValidNumber(n)) {
        // Excepción: n no es un número
        throw 1                  //3 //antes -2
    } else if (!isEntero(n)) {
        // Excepción: n no es entero
        throw 0                  //2 //antes -1
    } else if (n % 2) {
        r = false
    }
    return r
}


/**
 * @description Función que muestra si un número es par o impar
 * @param {number}: n
 * @returns {void}
 */

function mostrar(n) {

    let output = ''
    let mensajes = [
        `El número ${n} es impar`,
        `El número ${n} es par`,
        
    ]
    let excepciones = [

        `El número ${n} no es entero`,
        `${n} no es un número`
    ]
    try {
        
        let i = Number(esPar(n)) // return (0, 1) throw(-2 ,-1 ) 
        output = mensajes[i]
    } catch (error) {

     /*  i = error  // i = -error + 1 // -1 -> 2 // -2 -> 3 */
 output = excepciones [error]

    }
    console.log(output)
}










/*

GESTIÓN DE ERRORES - 

// Controlar un error implica poder continuar con la ejecución del programa 

y poder decidir sobre el mensaje de error mostrado //

const x = 67
let z = 45
try {
    //x=51 //implica un throw (al ser un error matemático)
    throw 'Probando error'
    z = z + x
    console.log('z vale',z)
} catch (error) {
    console.log('Vaya, parece que hay un error!!') 
     console.log(error) 
    if (error.name) {
        console.log(error.name, error.message)
    }else {
        console.log (error)
    }
}

console.log('x vale',x) */


module.exports = esPar;
