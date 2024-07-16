const askName = require('../js/script')
const testAskName = require('../js/script')

describe('test for askName', function(){
    it('should return \'Bonjour Allan !\'', function(){
        const expected = 'Bonjour Allan !'
        const result = askName()
    })
})