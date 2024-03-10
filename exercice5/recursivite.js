const intArr = [1,2,3,4,5,6,7,8,9]

/**
 * Etape 1 :
 * Fonction qui prend un tableau d’entiers à additionner entre eux.
 */
function sum1(arr){
    let sum = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sum1(intArr));

/**
 * Etape 2 :
 * Fonction qui prend un tableau d’entiers 
 * à additionner entre eux de manière récursive
 */
function sum2(arr,i=0){
    if(i >= arr.length){
        return 0
    }
    return arr[i] + sum2(arr,i+1)
}
console.log(sum2(intArr));

/**
 * Etape 3 :
 * Fonction qui prend un entier en paramètre 
 * et calcule son factoriel récursivement.
 */
function factorial(num){
    if(num === 1){
        return 1
    }
    return num * factorial(num-1)
}
console.log(factorial(3));
//3*facteur(2)
//3*2*facteur(1)
//3*2*1=6

/**
 * Etape 4 : Suite de Fibonacci
 * Suite de nombres entiers dont chaque terme successif 
 * représente la somme des deux termes précédents, 
 * et qui commence par 0 et 1.
 */
function fibonacci(x){
    if(x === 0){
        return 0
    }
    else if(x === 1){
        return 1
    }
    else{
        return fibonacci(x-1)+fibonacci(x-2)
    }
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

// function testFibonacci(){
//     const n = 10
//     console.log("Les dix premiers termes qui composent la suite de Fibonacci sont : ");
//     for (let i = 0; i < n; i++) {
//         console.log(fibonacci(i))
//     }
// }
// testFibonacci()