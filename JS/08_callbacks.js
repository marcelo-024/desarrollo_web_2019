function calcular(a,b,operacion, callback) {
    let msg = `El resultado de una ${operacion} con ${a} y ${b} es `


    return msg  + callback(a,b)
}





console.log(calcular(4,6,'suma',(x,y) => x+y))
console.log(calcular(4,6,'resta',(x,y)=> x-y))


function producto (a,b) {return a*b}

console.log(calcular(4,6,'producto',producto))
console.log(calcular(4,6,'division',function(x,y){return x/y}))