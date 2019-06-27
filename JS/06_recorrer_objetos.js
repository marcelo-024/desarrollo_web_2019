
/**
 * @description Recorrer un objeto a tantos niveles como sea necesario (tantos como contenga)
 *              y crea un string con la información contenida en el objeto
 * @param {objeto}:obj
 * 
 * @return {string}:r
 * 
 * 
 * 
 */


 function objectToString (obj){
    let cadena = ''
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value == 'object' /* && !Array.isArray(value) */) {
                cadena += `
            ${key}: ${objectToString (value)}
            `    
            } else {
                if (!isNaN(key) ) {
                    key++
                }
                cadena += `
              ${key}: ${value}
              `   
              }
             
           
        }
    }
    return cadena
 }

 
let p2 = {name: 'Juana' ,age: 18,isAlumno: true,gender: 'female'}

let cadena = objectToString(p2)

console.log(cadena)

let p1 = {  name: 'Juan' ,
            age: 19,
            address: {
                street: 'c/ Pez',
                number: '24',
                city: 'Cádiz',
                country: 'España'
            },
            hobbies: ['pintar','música','teatro'],
            isAlumno: true,
            gender: 'male'}

 cadena = objectToString(p1)

console.log(cadena)