function calcularSC(x,y, ...rest) {
    console.log(arguments)
    console.log(rest)
    return  (x*x) + (y*y)
  
}

calcularSC(30,50)

let a=2
let b=4
calcularSC(a,b)

let x=2
let y=4
console.log(calcularSC(y,x)) //20




console.log(calcularSC(y)) // NaN

console.log(calcularSC(y, x, 4, 8, 5)) //20



/** FUNCTION anySquare
* 
*   @description Calcular la suma de los cuadrados de n numeros
* 
*   @param {array}: aNum
*   @returns {number}: r
* 
* 
* 
*/

function addAnySquare(...aNum) {
    let r=0
 
    
    for (let i = 0; i < aNum.length; i++) {
        const item = aNum[i];
         r += item*item
    }

   return r  
}

console.log(addAnySquare (5,8,6,9,7,5))


