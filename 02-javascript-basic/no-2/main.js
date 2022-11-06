function checkValid(param){
    if(typeof param !== "number"){
        return false
    }
    return param > 0 ? true : false
}

function factorial(number, n){
    if(!n(number)){
        return null
    }

    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i
    }
    console.log(result)
}

console.log(factorial(10, checkValid));
console.log(factorial(13, checkValid));
console.log(factorial(0, checkValid));
console.log(factorial(-5, checkValid));
console.log(factorial('oke', checkValid));
console.log(factorial('10', checkValid));
console.log(factorial('6', checkValid));
console.log(factorial(true, checkValid));