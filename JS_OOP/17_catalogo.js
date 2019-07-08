

function Libro (description = '',code= '',price=0) {
    this.description = description
    this.code = code
    this.price = price
}


Libro.prototype.iva = 0.04
Libro.prototype.calcularIVA = function () {

    return {
        iva:this.price * this.iva,
        total: this.price + (this.price * this.iva)
    } 
}

Libro.prototype.mostrar = function () {
    const importe = this.calcularIVA()
    const cadena = `
    Descripción: ${this.description}
    Código: ${this.code}
    Precio: ${this.price}
    IVA: ${importe.iva}
    Precio Total: ${importe.total}`
    console.log(cadena)
}


const l1 = new Libro('Las aves migratorias','02135E',22);

l1.mostrar()
console.log(l1)
const l2 = new Libro('Loops: Historia de la música eléctronica','06847U',30);

l2.mostrar()
console.log(l2)


const l3 = new Libro('Catálogo IKEA','45559W',10);
l3.iva = 0.12
l3.mostrar()
console.log(l3)