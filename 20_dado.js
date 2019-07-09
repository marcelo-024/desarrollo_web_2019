
const dado = {
    _valor: null,
    tirarDado: function() {
        this._valor = parseInt(Math.random()*6) + 1
      
    } 
    
}


for (let i = 0; i <100; i++){

    dado.tirarDado()
    console.log(dado._valor)
}






const persona = {

    nombre:'Pepe',
    edad: 23,
    _curso: '',
    get curso() {}
    set curso() {}
}