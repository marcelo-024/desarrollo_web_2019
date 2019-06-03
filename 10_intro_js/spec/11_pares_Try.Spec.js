let esPar = require('../11_pares_Try.js')

describe('Pruebas de números pares', () => {


  it('should be "par" if n = 0', () => {
    let n = 0
    expect(esPar(n)).toEqual(true)
  })
  it('should be "impar" if n = 1', () => {
    let n = 1
    expect(esPar(n)).toEqual(false)
  })
  it('should be "par" if n = 2', () => {
    let n = 2
    expect(esPar(n)).toEqual(true)
  })
  it ('should be "impar" if n = string 21', () => {
    let n = '21'
    expect(esPar(n)).toEqual (false)
  })

  it ('should be "par" if n = string 22', () => {
    let n = '22'
    expect(esPar(n)).toEqual (true)
  })
  it('should be "impar" if n = -1', () => {
    let n = -1
    expect(esPar(n)).toEqual(false)
  })
  it('should be "par" if n = -2', () => {
    let n = -2
    expect(esPar(n)).toEqual(true)
  })


})


