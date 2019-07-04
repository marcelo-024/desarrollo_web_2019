//Serializacion
//JSON.stringify()
//JSON.parse()


const oDatos = {
    user: 'Pepe',
    edad: 23,
    curso: 'Front',
    direccion: {
        calle: 'Pez, 1',
        ciudad: 'cádiz'
    },
    nacim: new Date(1996,7,22)
}


let cadena = JSON.stringify(oDatos)

console.log(cadena)
console.log(typeof cadena)
console.log(oDatos)
let oNewData = JSON.parse(cadena) 
console.log(oNewData)
console.log(typeof oNewData)


//CLONADO DEEP
const clon = JSON.parse(JSON.stringify(oDatos))
clon.nacim = new Date (clon.nacim)
oDatos.direccion.ciudad = 'Huelva'
clon.direccion.ciudad = 'Malaga'
console.log(oDatos)
console.log(clon)



const oAlumno1 = {
    user: 'Pepe',
    edad: 23,
    curso: 'Front',
    direccion: {
        calle: 'Pez, 1',
        ciudad: 'cádiz'
    },
    nacim: new Date(1996,7,22)
}

const oAlumno2 = Object.assign({},oAlumno1)
oAlumno2.direccion = Object.assign({},oAlumno1.direccion)
oAlumno2.user = 'Ernesto'
oAlumno2.direccion.ciudad = 'Cuenca'
console.log(oAlumno2)
console.log(oAlumno1)


const a = [1,5,[8,5],8]
const b = JSON.parse(JSON.stringify(a))
const d = a.slice()
const c = Object.assign([],a)
c[2].push(123)

console.log(a)
console.log(b)
console.log(c)
console.log(d)