/** Asincronía 
 * 
 * 
 * En otros lenguajes es multihilo - multithread
 * Dandose concurrencia real
 * 
 * 
 * JavaScript es un lenguaje de un solo hilo
 * que gestiona el bucle de eventos
 * 
 * 
 * 
*/

setTimeout(() => {
    console.log('Mensaje 1')
},0)
console.log('Mensaje 2')
console.log('Mensaje 3')
setTimeout(() => {
    console.log('Mensaje 4')
},5000)

console.log('Mensaje 5')