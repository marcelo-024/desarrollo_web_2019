/* ES5

function Coche (marca,modelo,color,energia,precio) {

    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.energia = energia
    this.precio = precio

}

Coche.prototype.Arrancar=function(){

    console.log('run run')
    return this
}

Coche.prototype.ver = function () {

    console.log(this)
}


let cadena = ''
cadena.trim()

const c1 = new Coche('Audio','A3','Rojo','Diesel', 23000);

c1.Arrancar().ver() */

/////////////////////////////////////////////////////////////////////
/* ES6 -ECMA SCRIPT 2015 */

class Vehiculo {

    constructor (marca,modelo,color,energia,precio) { 
        
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.energia = energia
        this.precio = precio}


        arrancar(){

            console.log('run run')
            return this
        }
        
        ver () {
        
            console.log(this)
        }
        

}
class Coche extends Vehiculo {

    constructor (marca,modelo,color,energia,precio,volante,radio) {
        super (marca,modelo,color,energia,precio)
        this.volante = volante
        this.radio = radio
    }

}

class Moto extends Vehiculo {

    constructor (marca,modelo,color,energia,precio,manillar) {
        super (marca,modelo,color,energia,precio)
        this.manillar = manillar
    }
    arrancar(){
        super.arrancar() 
        console.log('BRUUUUUUUUUM')
        return this
    }

}
const c1 = new Coche ('Opel','Corsa','Metálico','Eléctrico',12000,'deportivo','MP3')
const m1 = new Moto ('Kawasaki','Ninja','Verde','Gasolina',19000,'extra')
c1.arrancar().ver()
m1.arrancar().ver()

console.log(m1 instanceof Moto)
console.log(m1 instanceof Coche)
console.log(m1 instanceof Vehiculo)