'use strict'
// undefined 
// boolean 
// number
// string
// object

/* let greet //Declaración de la variable (tipo undefined)
greet = 'Hola' // Inicializar la variable */



/* let user = 'Pepe' //Declarar + inicializar */

/* //Mala práctica
curso='JavaScript' */


/* console.log (typeof greet) */
/* console.log(curso) */

/* let saludo = 'Hello'//Las variables han de ser definidas dentro de las funciones */
//Declaración de la función



//Invocación de la función (ejecución uso de  una función)

function saludar (nombre = 'amigo') {
    
    let saludo='Hola  '

    console.log(saludo + nombre)
}
saludar ('Pepe')
saludar ('Elena')
saludar ()




/* // SEPARACIÓN DE RESPONSABILIDADES 
(SEPARATION OF CONCERNS)

// */

/** Funcion suma
*@description Recibe 2 parámetros y Devuelve la suma de ámbos
* @param  {number}
* @param {number}
* @returns {number}
*
 * 
 
*/



/* 
console.log(suma (2,2)) */



 

/* 

  
    0 / 4 = 0
    4 / 0 = Infinito

    0 / 0 = Indeterminación - NaN


*/

 


function sumar (a=0,b=0) {

/* let c = (a+b)

return (c) */

return a + b
 
}
/** Funcion restar
*@description Recibe 2 parámetros y Devuelve la resta de ámbos
* @param  {number}
* @param {number}
* @returns {number}
*
 * 
 
*/
function restar (a=0,b=0) {

    
    
    return a - b
    
    }




    /** Funcion divide
*@description Recibe 2 parámetros y Devuelve la division de ámbos
* @param  {number}
* @param {number}
* @returns {number}
*
*/
  function divide (a=0,b=1){



    return a / b
  }

/** Funcion multiply
*@description Recibe 2 parámetros y Devuelve la multiplicación de ámbos
* @param  {number}
* @param {number}
* @returns {number}
*
*/
function multiply (a=0,b=0) {

return a * b


}
  /** 
*Función Mostrar
*Recibe un mensaje y    
*lo saca por pantalla
*
* @param {string | number}
* @returns {void}
 */ 

   function mostrar (chain= '') {

    console.log (chain)
  }

 function probar () {

        let x = 2
        let y = 3

   


    mostrar( sumar (x,y))
    mostrar ( sumar (x))
    mostrar (sumar(undefined,y))
       mostrar()    

    mostrar (restar(x,y))
    mostrar (restar (x))

    mostrar (restar(undefined,y))
     

       
    mostrar (multiply (x,y))
    mostrar (multiply(x))
    mostrar (multiply (undefined,y))
    
    
    mostrar (divide (x,y))
    mostrar (divide(x))
    mostrar (divide (undefined,y))
    mostrar (divide ('pepe',y))
    
    

    

   
    }




