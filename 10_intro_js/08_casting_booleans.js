let x= -95
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
    console.log ('Verdadero')
} else {
    console.log ('Falso')
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
if (q){
    console.log ('Q tiene valor')
} else {
    console.log ('Q es 0')
}

if (q === 0) {

    console.log ('Q es exactamente 0')
} 