const fizzBuzz = require('../fizzbuzz');

describe('fizzbuzz', function(){
    it('start 0 and stop 0, should return an empty array', function(){
        const expected = [];
        const result = fizzBuzz(0,0);
        expect(result).toEqual(expected);
        
    });

    it('start === stop, should return an empty array', function(){
        const expected = [];
        const result = fizzBuzz(5,5);
        expect(result).toEqual(expected)
    })

    it('negative start, should not return negative numbers '), function(){
        const expected = [];
        const result = fizzBuzz(-5,5);
        expect(result).toEqual(expected)
    }

    it('start = 1 and stop = 2, should return an empty array', function(){
        const expected = [];
        const result = fizzBuzz(1,2);
        expect(result).toEqual(expected)
    })

    it('start = 1 and stop = 4, should return [3,\'fizz\']', function(){
        const expected = [3+'.fizz'];
        const result = fizzBuzz(1,4);
        expect(result).toEqual(expected)
    })

    it('start = 4 and stop = 6, should return [5,\'buzz\']', function(){
        const expected = [5+'.buzz'];
        const result = fizzBuzz(4,6);
        expect(result).toEqual(expected)
    })

    it('start = 13 and stop = 16, should return [15,\'fizzbuzz\']', function(){
        const expected = [15+'.fizzbuzz'];
        const result = fizzBuzz(13,16);
        expect(result).toEqual(expected)
    })

    it('start = 0 and stop = 16, should not return 14', function(){
        const result = fizzBuzz(0,16);
        result.forEach(element => {
            expect(element).not.toBe('')
        });
    })

    it('start = 0 and stop = 16, should return 7 result', function(){
        const result = fizzBuzz(0,16);
        expect(result.length).toBe(7)
        expect(result).toContain(5+'.buzz')
        expect(result).toContain(12+'.fizz')
        expect(result).toContain(15+'.fizzbuzz')
    })
});