function isValidNumber (n) {
    let r = true
        if (isNaN(n) || typeof n == 'boolean'  || Array.isArray(n) || n == '' || n === null) {
            r = false 
        }
    return r

}



function codificarEdad (edad) {
    let i = 3  //ELSE IMPLICITO
   if (!isValidNumber(edad)){
       i = -2

   }
   else if(edad <=0 ){
       i = -1
   }
   else if(edad < 18) {
        i = 0
        
    } else if (edad <=35) {
        i = 1
        
    }else if (edad <=50){
        i = 2  
    } 
   return i

/* console.log (`Con ${edad} años`, mensajes [i]) */
}


function respuestaEdad (edad) {
    
    let mensajes = [
        'eres menor de edad',
        'eres joven',
        'empieza a tener cuidado',
        'lo siento por ti'
    ]
    let errores = [ 
        
        'Error: El número indicado no es válido',
        'Error: La edad indicada no es un número'
       
    ]
    
let i = codificarEdad(edad)

if (typeof i  && i>=0 && i<=3){
console.log (`Con ${edad} años`, mensajes [i])}

else{
  /*   console.log (i)
    console.log(-i-1) */
    console.log (`${errores[-i-1]} `)
}

}


function probar () {
    let e = 18
e = 25
e = 35
e = 45
e = 50
e = 55
e = 65
e = 0
e = -3
e = '34'
e = 'Pepe'
e = true
e = false
e = {}
e = []
e = undefined
e = ''
e = null
e = undefined
respuestaEdad (e)
}

/* e = '34'
e = 5 */


/* console.log (e, isValidNumber(e)) */
/* 
   */

 probar()


