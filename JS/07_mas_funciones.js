'use strict'

/*Declaración de funciones*/

/**
 * @description Función que suma las raices de dos números
 * 
 * @function sumaRaices
 * 
 * @param {number}:a
 * @param {number}:b
 * 
 * @returns {number}:n
 */

 

 function sumaRoot(a=0,b=0) {
     let r = Math.sqrt(a) + Math.sqrt(b)
     return r
 }

 /*=============================================================*/

 /*Asignación de funciones*/
 
let x = {}

console.log({user: 'Pepe', edad: 33}) //este objeto creado dentro de un console.log es un ejemplo de objeto anonimo
let user = {user: 'Pepe', edad: 33}
console.log(user)


let restaRoot = function (a=0,b=0) {
      return Math.sqrt(a) - Math.sqrt(b)
}                    //Mismo resultado que declarando la función



console.log(sumaRoot(6,7))
console.log(restaRoot(6,7))



/*======================================================*/

/*Asignación de funciones 'arrow*/
/*let productoRoot = function (a=0,b=0) {
    return Math.sqrt(a) * Math.sqrt(b)
}*/

/*let productoRoot =  (a=0,b=0) => {
return Math.sqrt(a) * Math.sqrt(b)
}*/


let productoRoot =  (a=0,b=0) =>  Math.sqrt(a) * Math.sqrt(b)


console.log (productoRoot(4,25))

/*========================================*/


let halfRoot = a => Math.sqrt(a)/2