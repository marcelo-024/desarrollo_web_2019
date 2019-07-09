/** Function (Class) Triangulo
 * @property {number} _lado1 
 * @property {number} _lado2 
 * @property {number} _lado3 
 * 
 *  @method {object} getPerimetro
 * @method {object} mostrar
 */

function Triangulo(x = 0 , y = 0, z = 0) {
    this._lado1 = x
    this._lado2 = y
    this._lado3 = z

 
}

Triangulo.prototype.tipos = ['Este triángulo es equilátero','Este triángulo es isósceles','Este es un triángulo escaleno' ]
Triangulo.prototype.getPerímetro = function() {
   // let suma = this._lado1 + this._lado2 + this._lado3
   // let msg = `El perímetro de este triángulo es ${suma}`
    
    //console.log(msg)
    return this._lado1 + this._lado2 + this._lado3
}

Triangulo.prototype.getTipo = function () {
    //let msg = []
    let ans = 1
    if (this._lado1 === this._lado2 && this._lado2 === this._lado3) {
        ans = 0
    } else if (this._lado1 !== this._lado2 && this._lado2 !== this._lado3) {
        ans = 2
    }
   
    return this.tipos[ans] 
}

Triangulo.prototype.getLados = function () {

    return this
}


const tri1 = new Triangulo(15,15,15);
const tri2 = new Triangulo(15,15,20);
const tri3 = new Triangulo(18,16,19);


tri1.getLados()
tri1.getPerímetro()

console.log(tri1)

