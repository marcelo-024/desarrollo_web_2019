const {isValidNumber,isEntero} = require ('./01_comprobadores.js')
/*  class Helper = require ('./01_comprobadores') */

module.exports = class Factorial {
    constructor( n) {
        this.n = n
        this.factorial = 1
       if (this.preparar()) {
           this.calcular()
          
           
       } 
    }
        preparar () {
             if(!isValidNumber(this.n)) {
            throw new Error(`El dato ${this.n} introducido no es un número`)
        }else if (!isEntero(this.n)){
            throw new Error(`El parámetro ${this.n} no es entero`)
        }
        else if(this.n < 0){
            throw new Error('No existe el factorial de un número negativo')
        } 
        else {
            return true
        }
        }
        calcular() {
           
      
        
            if(this.n>1){
                for (let i = 2; i <= this.n; i--) {
                    this.factorial *= i }
            }
            
        
          
        }
        calcularAtras(){
            let r = 1
      
        
         if(this.n>1){
                for (let i = this.n; i >= 2; i--) {
                    this.factorial *= i }
            }
            
           
        }
        render(){
            let cadena =
            console.log(this.factorial)
        }
    

}

/**
 * Funcion que devuelve el factorial de un número n
 * 
 * 
 * @param {number}: n
 * 
 * @returns {number}: y
 */





 //console.log(factorial(7))

 function mostrarFactorial (n) {
     try {console.log((factorial(n)))}

     catch (error){console.log(error.message)}
     
 }



 mostrarFactorial(7)
 mostrarFactorial(0)
 mostrarFactorial(1)
 mostrarFactorial(-4)
 mostrarFactorial('pepito')
 mostrarFactorial(0.700)
 mostrarFactorial({})