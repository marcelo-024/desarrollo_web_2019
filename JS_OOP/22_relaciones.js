function Persona(nombre='',edad=0,direccion = {}) {

    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion //Relacion de asociacion
    this.mascota = []
}
function Direccion(calle='',numero = 0, ciudad='',pais=''){

    this.calle=calle
    this.numero=numero
    this.ciudad=ciudad
    this.pais=pais

}
function Mascota(nombre='',especie='') {
    this.nombre = nombre
    this.especie = especie
    
}
Persona.prototype.comprarMascota = function (mascota) {

    this.mascota.push(mascota)  //dependencia
}

const p1 = new Persona(
    'Pepe',
    45,
    new Direccion('C/ Soria',3,'Madrid','España'));

const mas1 = new Mascota('Pepito','Lombriz')
const mas2 = new Mascota('Rufo','Codorniz')


p1.comprarMascota(mas1) //Inyección de dependencia
console.log(p1)


console.log('---------------------------')

///Herencia


function Alumno(nombre='',edad=0,direccion = {},curso='') {
   this.curso = curso
   Persona.prototype.constructor.call(this,nombre,edad,direccion)
}
Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno
//console.log(Alumno.prototype.constructor)

const a1 = new Alumno('Pepe',34,new Direccion('C/ Soria',3,'Madrid','España'),'Páginas Web');
console.log(a1)
console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)