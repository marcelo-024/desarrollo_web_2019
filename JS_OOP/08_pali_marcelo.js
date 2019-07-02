/**
 * Función que determine si una cadena es un palíndromo o no
 * 
 * @param {string} pal
 * 
 * 
 * @return boolean
 */

function isPal(pal='') {
   let aA = pal.split('') 
   let aB = aA.slice()
   aB.reverse()
   console.log(aA)
   console.log(aB)
   /* if (aA === aB) {
       return true
   } else 
   {return false} */
   return aA.toString() === aB.toString()
} 


function isPal2 (pal= '') {

    let aPal = pal.split('')
    let aLap = aPal.slice()
    aLap.reverse()

    if (aLap.toString() === aPal.toString() ) {
        console.log('WIN')
    }
}


console.log(isPal('calor'))
console.log(isPal('otto'))
console.log(isPal('La tele letal'))

 isPal2('otto')
 isPal2('calor')




