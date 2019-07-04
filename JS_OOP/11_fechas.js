const fecha = new Date()
const america = new Date(1442,12,25)
const x = new Date(4555671600000)
const yz = new Date('2114-05-13')
console.log(fecha.valueOf())
console.log(america.getTime())
console.log(x)
console.log(yz)


//Mostrar fechas
console.log(fecha)
console.log(fecha.toString())
console.log(fecha.toUTCString())
console.log(fecha.toJSON())
console.log(fecha.toLocaleString())
console.log(fecha.toDateString())

//Operaciones con FECHAS

//get || getter
console.log(fecha.getTime())
console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getTimezoneOffset())
console.log('------------------------')
console.log(fecha)
console.log(fecha.getMonth())
console.log(fecha.getDay())
console.log(fecha.getDate())
console.log(fecha.getFullYear())
//set || setter


console.log(fecha.setDate())


