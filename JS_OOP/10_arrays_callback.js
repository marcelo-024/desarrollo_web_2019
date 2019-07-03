aDatos = [2,3,7,4,9,5]


/* aDatos.map((item,index,array)=>{})
aDatos.filter((item,index,array)=>{})
aDatos.some((item,index,array)=>{})
aDatos.every((item,index,array)=>{})
aDatos.forEach((item,index,array)=>{})
aDatos.reduce((item,index,array)=>{})
aDatos.reduceRight((item,index,array)=>{}) */

//.forEach recorre el array
aDatos.forEach(
    item => {console.log(`${item}`)   
});
/* equivale a:

for (const item of aDatos) {
    console.log(`${item}`
} */

const cuadrados = aDatos => aDatos.map (item => item * item)


console.log(cuadrados(aDatos))


//.map NOS PERMITE HACER PROYECCIONES DE ARRAY
const aUsuarios = ['rosa','raquel','Helena','marina',]


console.log(aUsuarios.map(item => item.toUpperCase()))  //HACER FUNCION DE CAPITALIZACION


//.filter NOS PERMITE FILTRAR EL ARRAY
/* function pares (aDatos=[]){
return aDatos.filter(item => !(item%2))

} */
const pares = aDatos => aDatos.filter(item=> item*item) //version condensada de la funcion anterior
pares(aDatos)
console.log(pares(aDatos))


//.reduce REDUCIR UN ARRAY

function sumaTotal  (aDatos = []){

return aDatos.reduce((acumulado ,item)=> {return acumulado + item})
}

function media  (aDatos = []){
    let i = 0
  return aDatos.reduce((acumulado ,item,index)=> {
            i = index
        return acumulado + item
        }) / ++i
        
    
    }
    
    console.log('SUMA TOTAL: ',sumaTotal(aDatos))
console.log('MEDIA:',media(aDatos))



/////////////////////////////////////////////////////
const aReyes = ['Fernando','Isabel','Juana','Carlos','Felipe','Luis'
                        ,'Jose',"Amadeo",'Alfonso','Juan Carlos']
/* function isRey(rey = '') {
   
    

    for (let i = 0; i < aReyes.length; i++) {
        let nombre = aReyes[i]
        if (nombre.toUpperCase() === rey.toUpperCase()) {
            return [true,i]
        } 
        
    }
return [false]
} */

function isNombreRey (rey = '') {

   return  aReyes.some(item => item.toUpperCase() === rey.toUpperCase())
}

console.log(isNombreRey('Fernando'))
console.log(isNombreRey('Iglesia'))