//Ejemplo de ITERACIÓN combinada con CONDICIÓN

/* let limite = 10
let acumulador = 0
let maximo = 100 
let counter = 0
for (let i = 0; i < limite;i++) //i++ === i=i+1
{ counter = i
     console.log(i);
    if (acumulador + (i*i) > maximo) {
        break
    }
    
    acumulador +=  (i*i)
}
   
console.log(acumulador,counter)
 */

/*==============* 
*
* EXTRAER LOS MÚLTIPLOS DE N DE UN ARRAY

*===============*/
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
    if(isNaN(m) || isNaN(n)) {
        throw new Error('Parametros no numericos')
    }
    let r = true

    if (m%n){   // m%n !=0
        r = false
        
    }
    return r
 }

  /**
   * @function extraer()
   * @description extraer de un array los múltiplos de n
   * @param {number}: -n
   * @param {object}: -array
   * @returns {array}: -multiplos
   */



   function extraerMultiplos(n, aDatos) {
        let r = []
        for (let i = 0; i < aDatos.length; i++) {
            const item = aDatos[i];
            if (isMultiplo(item, n)) {
                // r[r.length] = item
                r.push(item)
            }
        }    
        return r
   }


   /** funcion mostrarMultiplos
 * @description Muestra un array con los multiplos de n
 * @param {number} n 
 * @param {Array} aDatos 
 * @returns {void}
 */
function mostrarMultiplos(n, aDatos) {
    console.clear()
    console.log(`Los multiplos de ${n}`)
    console.log(`en el array ${aDatos} son:`)
    console.log(extraerMultiplos(n, aDatos))
}


module.exports = {};
module.exports.isMultiplo = isMultiplo
module.exports.extraerMultiplos = extraerMultiplos

{
    let misDatos = [1,2,3,4,5,6,7,8,9]
    mostrarMultiplos(2, misDatos)
}