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
    return result;
}

let showResult = [10, 13, 0, -5, 'oke', '10', '6', true];

showResult.forEach(function (val) {
    console.log(factorial(val, checkValid));
})