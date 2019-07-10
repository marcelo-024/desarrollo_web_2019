function main (){
   
    
    function leerDatosAsinc(i,timer=1000,callback) {
    return setTimeout (
        () => 
         let datos
        console.log(`Lectura de datos número ${i}`),timer)
        datos = {data:'muchios datitos'}
        
    }

    const handler = leerDatosAsinc(1,3000,()=>{})


    console.log('Leyendo los datos')
    clearTimeout (handler)  
    console.log(datos.data.)
}


main()