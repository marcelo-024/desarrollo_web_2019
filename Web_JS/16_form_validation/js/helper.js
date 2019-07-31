/** función formatoDNI
 * @description: dar formato número al DNI
 * @param: {number | string} dni
 * @returns { number }
 */
function formatoDNI(dni) {
    if(typeof dni === 'number') {
        return dni
    }
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
            if(caracter != ' ' && !isNaN(caracter)) {
                cadenaDNI += caracter
            }
    }
    return Number(cadenaDNI)
}


/** función letraDNI
 * @description: calcular letra DNI
 * @param: {number | string} dni
 * @returns {string}
 */

 function letraDNI(dni) {
     const aLetras =  ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
     return aLetras[formatoDNI(dni)%23]
 }


export function checkDNI(dni = '') {

 
   const letra = dni[dni.length-1]

   const letraCalc = letraDNI(dni) 

    
    return (letra.toUpperCase() === letraCalc.toUpperCase())
}