/**
 * ASINCRONIA
 * 
 * 
 *Procesos que consumen tiempo:
 *              -Bloqueante
 *              -No bloqueante
 * 
 * 
 */


 //proceso BLOQUEANTE de 1seg
 //siguiente proceso



 //proceso no bloqueante de 1 seg
 //siguientes procesos

setTimeout(() =>  console.log('Mensaje 1') , 5000);
 setTimeout(() =>  console.log('Mensaje 4'),8000)
 console.log('Mensaje 2')
 console.log('Mensaje 3')

 console.log('Mensaje 5')
 setTimeout (() => console.log('Mensaje 6'),10000)
 console.log('Mensaje 7')