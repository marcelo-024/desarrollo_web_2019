

const f = require('../04_caso.js')

describe ('Function comprobarCaso', () =>{
    it ('should be 0 if all MAY"',() => {
        const cadena = 'HOLA ME LLAMO MARCELO'
        expect(f.comprobarCaso(cadena)).toEqual(0);
    })
    it ('should be 1 if all min',() => {
        const cadena = 'hola me llamo marcelo'
        expect(f.comprobarCaso(cadena)).toEqual(1);
    })
    it ('should be 2 MAY & min"',() => {
        const cadena = 'Hola me llamo Marcelo'
        expect(f.comprobarCaso(cadena)).toEqual(2);
    })
});

describe ('Function aviso', () =>{
    it ('should be "Esta cadena solo contiene mayúsculas" with "HOLA ME LLAMO MARCELO"',() => {
        const cadena = 'HOLA ME LLAMO MARCELO'
        console.log = jasmine.createSpy("log")
        f.aviso(cadena)
         
        expect(console.log).toHaveBeenCalledWith('Esta cadena solo contiene mayúsculas')
    });
    it ('should be "Esta cadena solo contiene minúsculas" with "HOLA ME LLAMO MARCELO"',() => {
        const cadena = 'hola me llamo marcelo'
        console.log = jasmine.createSpy("log")
        f.aviso(cadena)
         
        expect(console.log).toHaveBeenCalledWith('Esta cadena solo contiene minúsculas')
    });
    it ('should be "Esta cadena contiene mayúsculas y minúsculas" with "HOLA ME LLAMO MARCELO"',() => {
        const cadena = 'Hola me llamo Marcelo'
        console.log = jasmine.createSpy("log")
        f.aviso(cadena)
         
        expect(console.log).toHaveBeenCalledWith('Esta cadena contiene mayúsculas y minúsculas')
    });

});