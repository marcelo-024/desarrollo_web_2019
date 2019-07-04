/**espFecha
 * @description Función que recibe una fecha y la convierte a formato Español
 * 
 * @param: {string}:fecha
 * 
 * @returns: {string}:r
 * 
 */
const aMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const aDias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
const espFecha = (fecha = new Date()) => {
    if (typeof fecha === 'string'){
        fecha = new Date(fecha)
    } 
    let msg = ''
    

    let dSem = aDias[fecha.getDay()]
    let dMes = fecha.getDate()
    let mes = aMeses[fecha.getMonth()]
    let año = fecha.getFullYear()
    
    return msg = `Esta fecha corresponde al ${dSem}, ${dMes} de ${mes} de ${año}`
}



const fechaEspShort = (fecha = new Date()) => {fecha = (typeof fecha === 'string') ? new Date (fecha) : fecha 
return aDias[fecha.getDay()] + ', ' + fecha.getDate() + ' ' + ' de '+ aMeses[fecha.getMonth()] + ' del ' + fecha.getFullYear() }
            

console.log(espFecha('1368-12-25'))
console.log('------------------------------')
console.log(espFecha('2019-07-04'))
console.log(espFecha('2016-07-28'))
console.log(espFecha('1996-08-22'))


console.log(fechaEspShort('2019-07-04'))
console.log(fechaEspShort('2016-07-28'))
console.log(fechaEspShort('1996-08-22'))
