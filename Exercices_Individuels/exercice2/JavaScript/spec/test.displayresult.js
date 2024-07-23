const testDisplayResult = require('../js/script')

describe('test display result', function(){
    it('should return [\'player 0 1\']',function(){
        const expected = ['player 0 1'];
        const result = testDisplayResult(1,0)
        expect(result).toEqual(expected)
    })
})