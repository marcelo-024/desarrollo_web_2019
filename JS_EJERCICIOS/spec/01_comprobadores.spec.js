const f = require('../01_comprobadores')


describe('function isValidNumber',()=>{

    it('should be true that 1 is a number',() => {
        expect(f.isValidNumber(1)).toBeTruthy()
    });
    it('should be true that 0.1 is a number',() => {
        expect(f.isValidNumber(0.1)).toBeTruthy()
    });
    it('should be true that "1" is a number',() => {
        expect(f.isValidNumber('-1')).toBeTruthy()
    });
    it('should be false that [2,4] is a number',() => {
        expect(f.isValidNumber.bind([2,4])).toThrowError()
    });
    it('should be false that {} is a number',() => {
        expect(f.isValidNumber.bind({})).toThrowError()
    });
    it('should be false that false is a number',() => {
        expect(f.isValidNumber.bind(false)).toThrowError()
    });

})