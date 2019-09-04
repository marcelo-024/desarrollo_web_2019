function algoAsync (){

   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        let n = Math.random()
        if (n < 0.8) {
        resolve(n)
    }else{
        reject(n)
    }
    },  1000)
    
   });

}

//algoAsync().then(datos => console.log(datos,'Acierto!')).catch(error=> console.log(error,'Fallaste!'))


(async () => {
    try {
        let datos = await algoAsync()
    console.log(datos,'Acierto!')
    } catch (error) {

      console.log(error,'Fallaste!')  
    }
   
})()