/**function isIt
 * @description comprobar si un nombre está dentro de una lista.
 * @param {string} rey 
 * 
 * @returns {string} msg
 */
{
const aReyes = ['Fernando','Isabel','Juana','Carlos','Felipe','Luis'
                        ,'Jose',"Amadeo",'Alfonso','Juan Carlos']
function isRey(rey = '') {
   
    

    for (let i = 0; i < aReyes.length; i++) {
        let nombre = aReyes[i]
        if (nombre.toUpperCase() === rey.toUpperCase()) {
            return [true,i]
        } 
        
    }
return [false]
}

function mostrarIsRey(nombre) {
    let [rey, position] = isRey(nombre)
    let cadena =  `está en la lista `
    let mensajes = [
        `El nombre ${nombre.toUpperCase()}, no ${cadena} `,
        `El nombre ${nombre.toUpperCase()}, ${cadena} en el puesto ${++position}`
    ]
    //let i = Number(isRey(nombre))

    console.log(mensajes[+rey])
}

//mostrarIsRey('Alfonso')
//mostrarIsRey('Fernando')
//mostrarIsRey('Julia')
//mostrarIsRey('Eustaquio')
//mostrarIsRey('EUSTAQUIO')


console.log(aReyes.indexOf('Fernando'))
console.log(aReyes.indexOf('Federico'))



console.log(aReyes.includes('Fernando'))
console.log(aReyes.includes('Ramón'))
}


