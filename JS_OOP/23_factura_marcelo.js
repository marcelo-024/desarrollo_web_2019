const {fechaEsp} = require('./15_helpers.js')

function Empresa (nombre,direccion,telefono,nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Cliente (nombre,direccion,telefono,nif) {
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

function Factura (empresa,cliente,numFactura,tipoIVA,formaPago,fecha){
    this.empresa = empresa
    this.cliente = cliente
    this.productos = []
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

const factura = new Factura(
    new Empresa('Ground Control',new Direccion('Manuela Malasaña',28,'Madrid','España'),918699417,'N-7954555')
,new Cliente('Baywaves',new Direccion('C/ Soria',3,'Madrid','España'),915398872,'T-4566789'),'000000012',0.21,'Al contado',new Date());

const p1 = new Producto('Pedal de voz',250,1);
const p2 = new Producto('Shure SM58',100,3);
const p3 = new Producto('Altavoz JBL',150,2);


factura.masProducto(p1)
factura.masProducto(p2)
factura.masProducto(p3)



console.log(factura)
factura.verFactura()