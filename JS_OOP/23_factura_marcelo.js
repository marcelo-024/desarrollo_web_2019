
const {Factura,Producto} = require ('./23_modelos.js')
const {empresa,cliente1} = require ('./23_empresas.js')
const {productos} = require ('./23_productos')


const codeProd = [[0,5],[1,3],[2,2]]

const productos1 = codeProd.map(a => new Producto(productos[a[0]].descripcion,productos[a[0]].precioU,a[1]))
//const empresa = new Empresa ('Ground Control',new Direccion('Manuela Malasaña','28','Madrid','España'),'918699417','N-7954555')
//const cliente1 = new Empresa ('Baywaves',new Direccion('C/ Soria','3','Madrid','España'),'915398872','T-4566789')
//const items = [new Producto('Pedal de voz',250,1), new Producto('Shure SM58',100,3),
//new Producto('Altavoz JBL',150,2),]

//const productos1 = [new Producto(productos[0].descripcion,productos[0].precioU,1), new Producto(productos[1].descripcion,productos[1].precioU,3),
//new Producto(productos[2].descripcion,productos[2].precioU,2),]

const factura = new Factura(empresa,cliente1,productos1,'000000012',0.21,'Al contado',new Date());











console.log(factura)
factura.verFactura()