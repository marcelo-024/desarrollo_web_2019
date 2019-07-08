/* 
Definir la estructura de un objeto que almacena una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de dactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/


const factura = {

    empresa: {
        nombre: 'Madrid-HIFI',
        dirección: 'C/ Soria 5',
        telefono: '912348865',
        NIF: '12341234H'
        
    },
    cliente: {
        nombre: 'Ground Control',
        dirección: 'C/ Manuela Malasaña 28',
        telefono: '914557723',
        NIF: '21365622J',
        
    },
    productos: [ {
            descripción: 'Pedal de voz para directo',
            precioU: 280,
            cantidad: 1,
        },
        {
            descripción: 'Altavoces PA',
            precioU: 120,
            cantidad: 2,
        },
        {
            descripción: 'Micrófono Dinámico Shure SM57',
            precioU: 80,
            cantidad: 2,
        },
    ],
    
        identificador: '02563',
        IVA: 21,
        forma_pago: 'tarjeta',
        fecha: new Date(2019,6,03),

    precioSinIVA: function (producto = {}) {
     let sumador = 0
      for (let i = 0; i < array.length; i++) {
          const item = array[i];
          sumador += item.
          
      }
       }
       return sumador },
    precioConIVA: function() {},

    mostrarFactura: function () {
        
        return msg = `La factura ${this.informacion.identificador} asciende a un total de ${this.precioConIVA(this.precioSinIVA())}` 
    },
}

console.log(factura.precioSinIVA(factura.productos))