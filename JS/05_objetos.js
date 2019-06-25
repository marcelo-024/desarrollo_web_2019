// Si estamos en Java, C##, PHP ....
//Los objetos dependen de clases
//class Persona {}
//p1 = new Persona ()
//p2 = new Persona ()


// En JS los objetos son LITERALES
// se basan en la notación JSON (JavaScript Object Notation)

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

let p2 = {  name: 'Juana' ,
            age: 18,
            isAlumno: true,
            gender: 'female'}





p1.height = 179
p2.colorPelo = "rubio"
console.log(p1)
console.log(p2)

console.log(p1.address.city)
console.log(p1.hobbies[1])




console.log(p2['name'])
let field = 'gender'
console.log(p2[field])

let prop = 'profesion'
p2[prop] = 'escritora'
console.log(p2[prop])



//ITERACIÓN EN OBJETOS

for (const key in p2) {
    
    const value = p2[key];
    console.log(`La propiedad ${key} vale ${value}`)
}
console.log ('.........................')
console.log('Mostrar' + p1)
for (const key in p1) {
    
        const value = p1[key];
        console.log(`La propiedad ${key} vale ${value}`) 
    }


    console.log ('.........................')
let aDatos =['Juan','Gato','Pie']

for (const i in aDatos) {
    
        const valor = aDatos[i];

        console.log(`La propiedad ${i} vale ${valor}`)
        
    
}