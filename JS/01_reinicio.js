/* 
Datos

-Indefinidos:
    -undefined

-Primitivos:
    -number
    -string
    -boolean
 
 
 -Referenciados:
 
    -objects
            -Array
            -Date
            -Error
            -RegExp
            -Math
            -JSON
            -Function
            
*/

/*Variables

    -Tipo: débiles (implícitos en el valor) y dinámicos.
    -Ciclo de vida
        -declaración: inicialización: asignación*/

let x = 34 // declaración + inicialización
let y 
//....
//....
x = 45 // asignación
x = x * 2 // asignación por expresiones

/* Ámbito

        -global
        -local
            -al bloque => let/const
            -a la función =>ley



*/
/* 

EN JS TODOS LOS DATOS HACEN CASTING A Number
DEBIDO A NAN */

let tipo = 'indefinido';
let  sueldo = 23*tipo
let datoRaro =23/0
console.log('sueldo:', sueldo)

console.log ('daroRaro:',datoRaro)


// En JS todos los datos hacen casting a boolean

let w

// Falsy
w = false
w = undefined
w = null
w = 0
w = NaN
w = ''

// Truly
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []

if (w) {}



// Operadores
// Aritméticos: + - * / %


parseInt(7/3) // = 2
7%3 // = 1

//*OPERADORES DE ASIGNACIÓN
let x = 45 //= Asigna un valor a una variable/constante/objeto
//OPERADORES DE COMPARACIÓN

    //IGUALDAD
    (x == 67) //Comparación //DEVUELVE FALSE
    (x == 86)//            //DEVUELVE TRUE
    (X == '86')//          //DEVUELVE TRUE (por el casting)
    //IDENTIDAD
    (x === '86') //Comparación de Tipos // DEVUELVE FALSE (anula el casting)

    //OTROS  > < >= <= 

    //Negación !

    x = 86 
        //No Igualdad !=
        (x != '86') //false

        //No Identidad !==
        (x !== '86') //true

    
    