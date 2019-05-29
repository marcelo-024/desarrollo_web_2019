let x = -95
console.log(x >= 0)
if (x >= 0) {

    console.log('Positivo')
} else {
    console.log('Negativo')
}


let w

//Falsy
w = false
w = undefined
w = null //similar a undefined
w = 0
w = '' //sin espacio solo el string vacio
w = NaN

//True

w = true
w = 898
w = 23
w = ' '
w = 'Stringeee'
w = {}
w = []


if (w) {
    /* if (Boolean (w)) { */
    console.log('Verdadero')
} else {
    console.log('Falso')
}

/* 
let k

k = 32
k = '5'
k = '34 Pepes'
k = true
k = false
k = undefined
k = []
k = {}
k = [4 , 8]
console.log( Number(k)) */


let q = 5
q = undefined
q = 0



/* if (q != 0){ */ /* FORMA NO JAVASCRIPT DE OPERAR */
if (q) {
    console.log('Q tiene valor')
} else {
    console.log('Q es 0')
}

if (q === 0) {

    console.log('Q es exactamente 0')
}


let nota = 0

/* if (nota !=true) {

    console.log('Has sacado la nota mínima')
} */

if (!nota) {

    console.log('Has sacado la nota mínima')

}
let b = Boolean(nota)
b = !!nota



console.log(b, typeof b)



let edad = 18
edad = 49
edad = 80 
edad = 16
edad = 18
edad = 50


function comprobarEdad (edad) {
    let i = 3  //ELSE IMPLICITO
    let mensajes = [
        'eres menor de edad',
        'eres joven',
        'empieza a tener cuidado',
        'lo siento por ti']
    if (edad < 18) {
        i = 0
        
    } else if (edad <=35) {
        i = 1
        
    }else if (edad <=50){
        i = 2

       
    } /* else {
        i = 3
    
    
    } */

console.log (`Con ${edad} años`, mensajes [i])

}


/* comprobarEdad(e) */

function codificarEdad (edad) {
    let i = 3  //ELSE IMPLICITO
   if (edad < 18) {
        i = 0
        
    } else if (edad <=35) {
        i = 1
        
    }else if (edad <=50){
        i = 2  
    } 
   return i

console.log (`Con ${edad} años`, mensajes [i])

}
//UNA FUNCIÓN PARA CADA TAREA, UNA PARA CODIFICAR LOS DATOS DE EDAD DENTRO DE UN RANGO MAS SIMPLE Y OTRA QUE NOS DEVUELVE UN MENSAJE SEGÚN LA EDAD//


// SEPARACIÓN DE RESPONSABILIDADES //
function respuestaEdad (edad) {
    
    let mensajes = [
        'eres menor de edad',
        'eres joven',
        'empieza a tener cuidado',
        'lo siento por ti'
    ]
    

console.log (`Con ${edad} años`, mensajes [codificarEdad(edad)])

}



let e = 18
/* e = 80 */
respuestaEdad (e)


