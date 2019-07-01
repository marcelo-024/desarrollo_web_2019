'use strict'

/** function comprobarCaso
 * 
 * @description: comprobar si la cadena tiene: 
 * 'solo mayúsculas'/ (0)
 * 'solo minúsculas'/ (1)
 * 'mayúsculas y minúsculas'/ (2)
 * 
 * @param: {string} cadena
 * 
 * @return: {number}: 0,1,2
 * 
 * 
 */


 function comprobarCaso(cadena=''){
    let code = 2

    if (cadena === cadena.toUpperCase()){
        code = 0

    } else if(cadena === cadena.toLowerCase()){
        code = 1
    }

    return code
 }




 console.log(comprobarCaso('HOLA ME LLAMO MARCELO'))
 console.log(comprobarCaso('hola me llamo marcelo'))
 console.log(comprobarCaso('Hola me llamo Marcelo'))


 function aviso(cadena){
    const mensaje =  ['Esta cadena solo contiene mayúsculas','Esta cadena solo contiene minúsculas','Esta cadena contiene mayúsculas y minúsculas']

    console.log(mensaje[comprobarCaso(cadena)])

 }

module.exports = {} 

module.exports.comprobarCaso = comprobarCaso
module.exports.aviso = aviso