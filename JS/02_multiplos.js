//Ejemplo de ITERACIÓN combinada con CONDICIÓN

let limite = 10
let acumulador = 0
let maximo = 100 
let counter = 0
for (let i = 0; i < limite;i++) //i++ === i=i+1
{ counter = i
     console.log(i);
    if (acumulador + (i*i) > maximo) {
        break
    }
    
    acumulador += + (i*i)
}
   
console.log(acumulador,counter)



/* let aDatos = [0,1,2,3,4,5,6,7,8,9,10]

n% 3 == 0
for (let i = 0; i < h.length; i++) {
    const element = h[i];
    
} */
/** * 
 * Seleccionar en un array los múltiplos de 3 
 * y 
 *(a.GUARDARLOS EN OTRO ARRAY
 * b.MOSTRARLOS POR PANTALLA)
 * 
 *  
 * 
 * @returns */

/** JSDoc
 * @function isMultiplo
 * @description devuelve TRUE si un número m es múltiplo de n
 * 
 * @param {number}:m
 *  @param {number}:n
 * @returns {boolean} 
 * 
 */

 function isMultiplo (m=0,n=0) {
    let r = true

    if (n%m){   // n%m !=0
        r = false
        
    }
    return r
 }


 //espectativas
 console.log('isMultiplo(2,20) debe dar TRUE')
 //isMultiplo (2,20) -->TRUE
isMultiplo(2,20)
console.log(isMultiplo(2,20))
 //espectativas
 console.log('isMultiplo(2,21) debe dar FALSE')
 //isMultiplo(2,21)
 //isMultiplo(2,21) -->FALSE
 console.log(isMultiplo(2,21))
  //espectativas
  console.log('isMultiplo(3,20) debe dar FALSE')
  //isMultiplo (3,20) -->FALSE
 isMultiplo(3,20)
 console.log(isMultiplo(3,20))
  //espectativas
  console.log('isMultiplo(3,21) debe dar TRUE')
  //isMultiplo(3,21)
  //isMultiplo(3,21) -->TRUE
  console.log(isMultiplo(3,21))



  /**
   * @function extraer()
   * @description extraer de un array los múltiplos de n
   * @param {number}: -n
   * @param {object}: -array
   * @returns {array}: -multiplos
   */



   function extraerMultiplos(n, aDatos) {
        let r = []
        
        return r
   }