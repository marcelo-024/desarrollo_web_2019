{
    const aDatos = ['perro','gato']
    aDatos.length
    
    //Implementadas como inmutables(devuelven algo pero no modifican al array al que afectan) {concat,slice}
   console.log(aDatos.concat(['garza','canario']))
   console.log(aDatos)

   //Implementadas como mutables (una vez que se ejecutan afectan al array completo) {sort,reverse}
    aDatos.sort()
    console.log(aDatos)

    const aNumbers = [31,85,41,18,9,46,43,24,37,8]
    const aNumbersOg = aNumbers.slice()
    aNumbers.sort((a,b)=> a-b )//Función de ordenación
    console.log(aNumbers)
    console.log(aNumbersOg)
    console.log(aNumbersOg.reverse())
    aNumbers.push(5)
    console.log(aNumbers)


    //fraccionar Arrays: 
    //1.De forma INMUTABLE 
    let aNombres = ['Luisa','Rafa','Jesús','Laura','Enrique']
    console.log(aNombres.slice(1,3))
    console.log(aNombres)
    //2.De forma MUTABLE
    console.log(aNombres)
    let eliminados = aNombres.splice(1,3,'Pedro','Ernesto')//clona la seccion elegida en la variable eliminados y sustituye estas posiciones por los nombres especificados como parametros

    console.log(aNombres)
    console.log(eliminados)
    //SPLICE PARA AÑADIR

let paises = ['francia','italia','alemania','austria']

paises.splice(2,0,'Estonia')

console.log(paises)

//Pilas y Colas

//PILA -> stack FILO(First In Last Out)
//Para generar este proceso existen 2 métodos (PUSH y POP)

paises.push('Portugal','Brasil')
paises.pop()
console.log(paises)


//COLA -> heap FIFO (First In First Out)
//Para generar este proceso existen 2 métodos (UNSHIFT y SHIFT)
paises.unshift('croacia')
//paises.shift()
console.log(paises)
}







