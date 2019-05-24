'use strict'

//Variable de ámbito (scope) Global
var antes = 2
let a = 2
let b = 4

function prueba() {
    //variable de ámbito (scope) local a la función
    var int = 3
    let y = 6
    let b = 9 //Variable distinta a b global

    if (true) {
        var z = 8
        let w = 7
        console.log('Es Verdad')
        console.log('Desde el if',a) // 2
        console.log('Desde el if',b) // 9  Al ejecutar obtendríamos b local
        console.log('Desde el if',w)// 7
    }

    console.log('Desde la función',a) // 2
    console.log('Desde la función',b) // 9
   // console.log('Desde la función',w) // ERROR
}




prueba()
//c = 3 daría un error debido al use strict


/////////////////////////////////////////////////////


let v=45

function ejemplo () {

let v=46


    if (true){


        let v= 3
        console.log(v)
    }

      console.log(v)
  
}

console.log (v)


ejemplo()

/* function sample () {

 console.log (v)
}  */







/* sample () */



/*  */
/* console.log('Desde el programa'a)
console.log('Desde el programa'b)

 */


