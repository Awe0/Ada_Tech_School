const isValidDate = require("../../js/script");

describe('testing isValidDate function', function(){
    it('should return false if param is int', function(){
        expect(isValidDate(0)).toEqual(false);
    });

    it('should return false if param is bool', function(){
        expect(isValidDate(true)).toEqual(false);
    });

    it('should return false if year is with 2 digit', function(){
        expect(isValidDate('01/01/39')).toEqual(false);
    });

    it('should return false if month is > 12', function(){
        expect(isValidDate('01/14/1939')).toEqual(false);
    });

    it('should return false if day is > 31', function(){
        expect(isValidDate('32/01/1939')).toEqual(false);
    });

    it('should return false if months have more days than it should', function(){
        expect(isValidDate('31/11/1939')).toEqual(false);
        expect(isValidDate('31/04/1939')).toEqual(false);
        expect(isValidDate('30/02/1939')).toEqual(false);
        expect(isValidDate('32/08/1939')).toEqual(false);
    });
    
    it('should return false for incorrect string format', function() {
        expect(isValidDate('2023/06/15')).toBe(false);
        expect(isValidDate('15-06-2023')).toBe(false);
    });

    it('should handle leading zeros correctly', function() {
        expect(isValidDate('01/1/2023')).toBe(false);
        expect(isValidDate('1/01/2023')).toBe(false);
    });

    it('should handle year limits', function() {
        expect(isValidDate('01/01/0000')).toBe(false);
        expect(isValidDate('01/01/9999')).toBe(true);
    });

    it('should return false for empty string or null', function() {
        expect(isValidDate('')).toBe(false);
        expect(isValidDate(null)).toBe(false);
    });
})