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
   if (aA === aB) {
       return true
   } else 
   {return false}
   
} 


function isPal2 (pal= '') {

    let aPal = pal.split('')
    let aLap = aPal.reverse()

    if (aLap === aPal) {
        console.log('WIN')
    }
}


console.log(isPal('calor'))
console.log(isPal('otto'))


 isPal2('otto')
 isPal2('calor')




