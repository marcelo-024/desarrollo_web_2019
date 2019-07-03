let ob = {}//new Object()

//Los arrays son objetos que guardan datos de manera indexada
let aDatos = [2, 8, 6, 4,] // new Array() //Esta forma no se utiliza, preferimos generar objetos de manera LITERAL

//aDatos[aDatos.length] = 87  //Accede a la primera posicion vacia
//aDatos[aDatos.length] = [5,65]
aDatos.push(87,56,5)
aDatos[101] = 9

/* console.log(aDatos, aDatos[80]) */


for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    if (!item) {
       aDatos[i] = parseInt(Math.random() * 100)
       
    }
    
}

/* console.log(String(aDatos)) */











/**function RandomArray
 * Función que devuelve un array de n números aleatorios enteros y positivos menores o iguales a 100
 * 
 * @param {number}: n
 * 
 * @returns {array}: aDatos
 */

//IMPLEMENTACION IMPLEMENTACION IMPLEMENTACION IMPLEMENTACION

function RandomArray (n = 0) {
    const aDatos = []
    

        for (let i = 0; i < n; i++) {
            aDatos[i] = parseInt(Math.random()*100);
            
        }
        
   
    return aDatos
}

console.log(String(RandomArray(50)))
console.log(String(RandomArray(50)))
console.log(String(RandomArray(50)))

/**
 * @function darFormarto
 * @description Controlar los formatos del número del DNI
 * 
 * 
 * @param {number|string}: dni
 * 
 * 
 * @return {number}: r
 */

 function darFormato(dni) {
    if (typeof dni === 'number') {
        return dni
    }
     
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
        if (caracter != ' ' & !isNaN(caracter)) {
           cadenaDNI += caracter 
        }
        
    }
    return Number(cadenaDNI)
 }

/**
 * @function calcularDni
 * @description Calcular la letra del DNI
 * 
 * 
 * @param {number|string}: dni
 * 
 * 
 * @return {string}: ''
 */


function calcularDni(dni) {

    const aLetras =  ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    return aLetras[darFormato(dni)%23]
   
}




console.log(calcularDni('50333465'))
console.log(calcularDni('50.333.465'))
console.log(calcularDni('50-33-34-65'))
console.log(calcularDni('50 33-34|65'))
console.log(calcularDni('50 33 34 65'))
console.log(calcularDni('0050333465'))


