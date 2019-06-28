const objEx = new Object() // Es lo mismo que escribir const obj = {}

const pulga= 123
const garrapata = 50
const animal1 = {
    nombre: 'Conejo',
    edad: 3,
    especie: 'Canis Lupus Familiaris',
    parásitos:  [pulga, garrapata]
}

animal1.peso = 50
const animal2 = {
    nombre: 'Pirri',
    edad: 5,
    especie: 'Canis Lupus Familiaris'
}

const persona1 = {

    nombre: 'Enrique',
    edad: 26,
    mascotas:[animal1,animal2]
    
}//Objetos literales 









const participantes = [persona1,animal1]//array que contiene objetos
console.log(animal1)
console.log(animal1['especie'])
console.log(persona1['mascotas'])

let propiedad = 'especie'
console.log(animal1['especie'])
console.log (animal1[propiedad])




















/////


/**
 * 
 * Objeto: MESES /dias de la semana
 * las propiedades son los meses en ES y los valores los
 * nombres en IN
 * 
 * Bucle que recorra el objeto y guarde 
 * 
 * 
 * 
 */


