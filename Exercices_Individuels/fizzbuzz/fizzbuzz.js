function fizzBuzz(start, stop){
    let result = [];
    for (i = start;  i < stop; i++) {
        if (i%3 === 0 && i%5 === 0){
            result.push(i+'.fizzbuzz');
        }
        else if (i%3 === 0){
            result.push(i+'.fizz');
        }
        else if (i%5 === 0){
            result.push(i+'.buzz');
        }
    }
    return result
}

module.exports = fizzBuzz;