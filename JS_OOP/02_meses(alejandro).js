let {aMeses, aMesesRusos, aMesesIngles} = require('./02_data(alejandro).js')

function elegirArray(key) {
    let r
    switch (key) {
        case 'español':
        case 'esp': //CASOS AGRUPADOS
        case 'es':
      
            r = aMeses
            break;
        case 'ru':
        case 'rus':
        case 'ruso':
            r = aMesesRusos
            break
        case 'en':
        case 'inglés':
            r = aMesesIngles
            break;
        default :throw new Error ('Código de idioma incorrecto.')
    }
    return r
}
function elegirIdioma(key) {
    let r
    switch (key) {
        case 'esp': //CASOS AGRUPADOS
        case 'es':
        
            r = 'español'
            break;
        case 'ru':
        case 'rus':
            r = 'ruso'
            break
        case 'en':
            r = 'inglés'
            break;
        default:
            r = key        
    }
    return r
}

function prepararMeses (id1,id2) {

    //const m = require('./02_data(alejandro).js')
    

    let meses1 = elegirArray(id1)
    let meses2 = elegirArray(id2)




    if (meses1.length > meses2.length ) {
        throw new Error('Falta un mes del segundo idioma')
    } else if (meses1.length < meses2.length) {
        throw new Error('Falta un mes del primer idioma')
    }
     let oMeses = {}
    for (let i = 0; i < meses1.length; i++) {
        const item = meses1[i];
        oMeses[item] = meses2[i]
    }

    return oMeses
} 
   
function mostrarTraduccion(id1,id2) {
    //Elige dos entre 'es'. 'ru' y 'en'
    let oMeses = prepararMeses(id1,id2)
    let texto = ``
    let ids = [elegirIdioma(id1),elegirIdioma(id2)]
        for (const mes in oMeses) {
            if (oMeses.hasOwnProperty(mes)) {
                const trad = oMeses[mes];
                texto += `El mes de ${mes} en ${ids[0]}, en ${ids[1]} se dice ${trad} \n`
              
                
            }
        }

    console.log(texto)
}


//Sistema de control de errores.
try {
    mostrarTraduccion('ru','esp')
} catch (e) {
    console.error(e.message)
}
