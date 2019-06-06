let f = require('../11_pares_Try.js')

describe('Pruebas de números pares', () => {


  it('should be "par" if n = 0', () => {
    let n = 0
    expect(f.esPar(n)).toBeTruthy()
  })
  it('should be "impar" if n = 1', () => {
    let n = 1
    expect(f.esPar(n)).toBeFalsy()
  })
  it('should be "par" if n = 2', () => {
    let n = 2
    expect(f.esPar(n)).toBeTruthy()
  })
  it ('should be "impar" if n = string 21', () => {
    let n = '21'
    expect(f.esPar(n)).toBeFalsy()
  })

  it ('should be "par" if n = string 22', () => {
    let n = '22'
    expect(f.esPar(n)).toBeTruthy()
  })
  it('should be "impar" if n = -1', () => {
    let n = -1
    expect(f.esPar(n)).toBeFalsy()
  })
  it('should be "par" if n = -2', () => {
    let n = -2
    expect(f.esPar(n)).toBeTruthy()
  })
  it('should throw "error" if n = "pepe"', () => {
    let n = 'pepe'
    expect(f.esPar.bind(null,n)).toThrowError(/no es un número/)
  })
  it('should throw "error" if n = 4.3', () => {
    let n = 4.3
    expect(f.esPar.bind(null,n)).toThrowError(/no es entero/)
  })
})


describe('Mostrar', () => {
  
  it('should behave...', () => {
    
  });
  it('should behave...', () => {
    
  });
});