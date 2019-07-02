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
    aNumbers.

}