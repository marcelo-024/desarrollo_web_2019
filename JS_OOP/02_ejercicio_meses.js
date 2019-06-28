 function translate() {
     
    
    const oMeses = {

        Enero: 'January',
        Febrero: 'February',
        Marzo: 'March',
        Abril: 'April',
        Mayo: 'May',
        Junio: 'June',
        Julio: 'July',
        Agosto: 'August',
        Septiembre: 'September',
        Octubre: 'October',
        Noviembre: 'November',
        Diciembre: 'December',


    }
    let texto = ``
    for (const key in oMeses) {
        if (oMeses.hasOwnProperty(key)) {
             const trans = oMeses[key];
             texto += `En inglés ${key} se dice ${trans} \n`
           
        }
    }
console.log(texto)
}

translate()