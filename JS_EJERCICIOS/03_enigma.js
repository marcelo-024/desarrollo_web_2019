/**
 * Una función que recibe una cadena y un número entre 1 y 10
 * 
 * @param {string}: chain
 * @param {number}: code
 * 
 * @returns {string}: msg
 */


 function enigmaStart (chain = '',code = 0) {
    const aMsg = []
    let msg = ''
    if(code < 0 || code > 10) {
     throw new Error ('El código supera los límites de mi razonamiento')
    } 
    else {   for (let i = 0; i < chain.length; i++) {
        aMsg.push(chain.charCodeAt(i)+code)
          
      }
      for (let i = 0; i < aMsg.length; i++) {
          msg += String.fromCharCode(aMsg[i]);
          
      }   
      return msg}

  

    
 }

function enigmaReverse (chain = '', code = 0) {
    const aMsg = []
    let msg = ''
    if(code < 0 || code > 10) {
     throw new Error ('El código supera los límites de mi razonamiento')
    } 
    else {   for (let i = 0; i < chain.length; i++) {
        aMsg.push(chain.charCodeAt(i)-code)
          
      }
      for (let i = 0; i < aMsg.length; i++) {
          msg += String.fromCharCode(aMsg[i]);
          
      }   
      return msg}

}

const mostrarEnigma = (chain = '', code = 0) => {
    console.log(enigmaStart(chain,code))
    console.log(enigmaReverse(enigmaStart(chain,code),code),)
}



try {
    mostrarEnigma('jajaja jaja', 10)
    mostrarEnigma('Jabibi Jabibi',2)
    mostrarEnigma('HAL', 1)
    mostrarEnigma('jajaja jaja', 100)

}
catch (error){
    console.log(error.message)
}
