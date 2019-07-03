/**function limpiarArray
 * @description devuelve un array eliminando los nombres que empiecen 
 *              por una letra determinada del array que recibe
 * 
 * @param: {string}:letra
 * @param: {array}:aNombres
 * 
 * 
 * 
 * @return: {array}
 */

const limpiarArray = (letra='',aNombres = []) => {
   let aDatos = aNombres.slice()

    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if (item[0].toLowerCase() === letra.toLowerCase() ) {
           aDatos.splice(i,1)
           i--
        }   
    }
    return aDatos
}
const aUsuarios = ['rosa','raquel','Helena','marina',]



let l = 'r'
console.log(limpiarArray(l,aUsuarios)) 
console.log(aUsuarios)

//PARAMETROS Y ELEMENTALES
function algo(h) {

    h = h*h
    return h
}


let z = 4

algo(z)
console.log(z)


//PARAMETROS Y REFERENCIAS


function cuadrados (aD) {
    const r = aD.slice()
for (let i = 0; i < r.length; i++) {
    r[i] = r[i]*r[i]
    
}
return r //
}
let x= [5,6,87,2] 

cuadrados(x)
console.log(x)