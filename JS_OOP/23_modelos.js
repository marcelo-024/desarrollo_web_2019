const {fechaEsp} = require('./15_helpers.js')

function Empresa (nombre,direccion,telefono,nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Producto(descripcion,precioU,cantidad) {
    this.descripcion = descripcion
    this.precioU = precioU
    this.cantidad = cantidad
}

function Direccion(calle='',numero = 0, ciudad='',pais=''){

    this.calle=calle
    this.numero=numero
    this.ciudad=ciudad
    this.pais=pais

}

function Factura (  empresa = {},
                    cliente = {},
                    productos = [{}],
                    numFactura = '',
                    tipoIVA = 0,
                    formaPago = '',
                    fecha = '')
                    {
    this.empresa = empresa
    this.cliente = cliente
    this.productos = productos
    this.numFactura = numFactura
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.fecha = fecha
}
Factura.prototype.masProducto = function (producto) {

    this.productos.push(producto)
}
Factura.prototype.calcularImporte = function () {

    
        const importe = {} 
        importe.base = 
           this.productos.map( item => item.precioU * item.cantidad).reduce( (total, item) => total + item ) 
        importe.iva = importe.base * this.tipoIVA
        importe.total = importe.base + importe.iva
        return importe
    

}

Factura.prototype.verFactura = function () {

    const importe = this.calcularImporte()
    const msg = `El importe sin iva asciende a ${importe.base}.Tras aplicarle un IVA del ${this.tipoIVA} el importe total de la factura asciende a ${importe.total}. ${fechaEsp(this.fecha)}`
    console.log(msg)
}



module.exports = {}

module.exports.Factura = Factura
module.exports.Empresa = Empresa
module.exports.Producto = Producto
module.exports.Direccion = Direccion