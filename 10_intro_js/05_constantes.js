let a = 4
console.log (a)
 a = 14
console.log (a)
 a = 24
console.log (a)
 a = 42
console.log (a)
 a = 64
console.log (a)

//ECMA SCRIPT 6

const b = 6
/* b= 7 //ERROR */

if (true ) {
    const c = 7
    console.log (b)//6
    console.log(c)//7
}
/* console.log (c)//error (VARIABLE NO DEFINIDA)*/
console.log(b)//6



//////////////////////////////

const aDatos = [22,10,46]
aDatos[aDatos.length] = 33
aDatos.push (86)
aDatos.unshift(15)
/* aDatos = 3 //ERROR */
/* aDatos = [] //ERORR */
/* aDatos = [22,10,46]//ERROR */

const persona= {
    nombre:'Pepe', edad:22 
}

persona.altura = 178
/* persona = 80//ERROR */
/* persona = {}//ERROR */
/* persona= { nombre:'Pepe', edad:22 }//ERROR */



console.log(aDatos )
console.log(persona)