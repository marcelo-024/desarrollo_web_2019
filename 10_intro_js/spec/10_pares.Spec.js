

describe('Función isEntero', () => {
  let f = require('../10_pares')

  console.log('-----------------------------------')
  console.log(f)
  it('should be "true" if n = 2', () => {
    let n = 2
    expect(f.isEntero(n)).toBeTruthy()
  });
  it('should be "false" if n = 2.5', () => {
    let n = 2.5
    expect(f.isEntero(n)).toBeFalsy()
  });
  it('should be "true" if n = -2', () => {
    let n = -2
    expect(f.isEntero(n)).toBeTruthy()
  });
  it('should be "false" if n = -2.5', () => {
    let n = -2.5
    expect(f.isEntero(n)).toBeFalsy()
  });
  it('should be "true" if n = 0', () => {
    let n = 0
    expect(f.isEntero(n)).toBeTruthy()
  });
  it('should be "true" if n = "2"', () => {
    let n = '2'
    expect(f.isEntero(n)).toBeTruthy()
  });
 

});

describe('Pruebas de números pares', () => {
let f = require('../10_pares.js')

  it('should be "true" if n = 0', () => {
    let n = 0
    expect(f.esPar(n)).toBeTruthy()
  })

  it('should be "false" if n = 1', () => {
    let n = 1
    expect(f.esPar(n)).toBeFalsy()
  })
  it('should be "true" if n = 2', () => {
    let n = 2
    expect(f.esPar.bind(n)).toBeTruthy()
  })
  it ('should be "false" if n = string "21"', () => {
    let n = '21'
    expect(f.esPar(n)).toBeFalsy()
  })

  it ('should be "true" if n = string "22"', () => {
    let n = '22'
    expect(f.esPar(n)).toEqual (true)
  })
  it('should be "false" if n = -1', () => {
    let n = -1
    expect(f.esPar(n)).toBeFalsy()
  })
  it('should be "true" if n = -2', () => {
    let n = -2
    expect(f.esPar(n)).toBeTruthy()
  })

  it('should be -2 if n = "pepe"', () => {
    let n = 'pepe'
    expect(f.esPar(n)).toEqual(-2)
  })

  it('should be -1 if n = "56.7"', () => {
    let n = '56.7'
    expect(f.esPar(n)).toEqual(-1)
  })
})


