const intArr = [1,2,3,4,5,6,7,8,9]

/**
 * Fonction qui prend un tableau d’entiers à additionner entre eux.
 */
function sum1(arr){
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}

/**
 * Fonction qui prend un tableau d’entiers 
 * à additionner entre eux de manière récursive
 */
function sum2(arr,i=0){
    if(i>=arr.length){
        return 0
    }
    return arr[i] + sum2(arr,i++)
}

console.log(sum1(intArr));
console.log(sum2(intArr));