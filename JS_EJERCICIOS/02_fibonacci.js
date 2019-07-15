/**
 * @description Un programa que recibe un limite y calcula una progresion de fibonacci hasta llegar a este mismo
 * 
 * @param {number} max
 * 
 * @returns {array}: fbnci
 * 
 * 
 */




 function calcularFIB(max = 0) {
    if (max < 1) {
        return 'Límite no valido'
    }
    let fbnci = [0, 1];
    let  i = 1;
    while ( max > fbnci[i] + fbnci[i-1]) {
   
    fbnci.push(fbnci[i] + fbnci[i-1]);
     i++;
};

return fbnci
     
 }



/*  function calcularFIB (max) {
 
 
    const fbnci = [0,1]
            while (fbnci[fbnci.length] < max) {  

            let next = fbnci[fbnci.length-2] + fbnci[fbnci.length-1];

            fbnci.push(next)
        }
        return fbnci
 } */

try {((n) => console.log(calcularFIB(n)))(10000)} 
catch(error) {
    console.log(error.message)
}
 