/**
 * @description Función que calcula la media de any numeros
 * @param  {...[number]} aDatos
 * 
 * 
 * @returns {number} r
 */


function media (...aDatos) {
    let r = 0
    
    for (let i = 0; i < aDatos.length; i++) {
        
        let value = aDatos[i];
        r += value
        
    }

    return r/aDatos.length
}


//console.log(media(10,10,10))






function mediaTotal(...aDatos) { //... => restOperator
let r = 0
let n = 0
r += sumaTotal(...aDatos)//... => spreadOperator
return r/n
    function sumaTotal(...aDatos) {
        let s = 0
        for (let i = 0; i < aDatos.length; i++) {
            const item = aDatos[i];
            if(Array.isArray(item)){
                s += sumaTotal(...item)//spread operator
            }else {
                s += item
                n++
            }
            
        }
        return s 
    }



}


console.log(mediaTotal(30,[2,3,8,1],5,[8,5]))

console.log(media(30,2,3,8,1,5,8,5))