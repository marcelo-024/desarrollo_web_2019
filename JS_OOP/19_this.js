//4 fotmas de ejecutar una función
//patrones de invocación
//cambian el significado de this

function algo() {
    console.log(this)
}

//Función

algo() //this es process () o window(Browser)

//Método

const o = {nombre:'Pepe', edad:23}

o.saludar = function () {

    console.log(this.algo)
}
o.algo = algo

o.algo()
o.saludar()

//Constructora // this es el nuevo objeto construido

const nuevo = new algo();


//Indirectamente  ()

const otro = {
    tipo: 'perro',
    nombre: 'Rufo'
}

//algo.call()
algo.apply(otro) //this el objeto que "toma prestada" la funcion 






console.log('--------------------------------')


const persona = {nombre:'Pepe'}

persona.saludar = function () {
    console.log(`Hola soy ${this.nombre}`)


    
}

persona.saludar()
//global.setTimeout(persona.saludar , 1000)
//global.setTimeout(persona.saludar.bind(persona),2000)


console.log('--------------------------------')

persona.saludarArrow = ()  => //En las funciones arrow this es consistente: 
//SIEMPRE ES LA PROPIA FUNCION
    console.log(`Hola soy ${this.nombre}`)


    


persona.saludarArrow()

algoArrow = () => { console.log(this)}

algoArrow()
global.setTimeout(persona.saludarArrow , 1000)
global.setTimeout(algoArrow,2000)