module.exports = class Helper {

      static  isEntero(n = 0) {
   /*  let r = false
    if () {
        r = true
    }  */
    return parseInt(n) === parseFloat(n)
    }
      static  isValidNumber (n = 0) {
            let r = true
                if (isNaN(n) || typeof n == 'boolean'  || typeof n == 'object') /* || n == '' || n === null )*/ {
                    r = false
                
                } 
                return r
                
            

    }

}




