const o = {
    id: 123,
    nombre: 'pepe', 
    edad: 20, 
    conocidos:['Juan','Jose','Marta','Estefania'],

    //MÉTODO
    mostrarID: function () {
        console.log(this.id)
    },
     saludar: function (otro = 'amigo') {
         if (this.isConocidos(otro)) {
            console.log(`Hola ${otro}, soy ${this.nombre}`) 
         } else {
            console.log(`Oye ${otro}, no te conozco de nada.`) 
         }
      
    },
   
    isConocidos: function (otro= '') {
       return this.conocidos.some((item) => item.toUpperCase() === otro.toUpperCase())
    }  //SOLO ES USADA DENTRO DEL OBJETO(NO ESTÁN PENSADAS PARA SER EJECUTADAS DESDE FUERA)

}

o.saludar('Jose')
o.saludar ('Roberto')
o.mostrarID()