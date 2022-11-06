function checkValidasi(param){
    if(typeof param !== 'number'){
        return false;
    }
    return param >= 0 && Number.isInteger(param) ? true : false;
}

function checkUsia(usia, n){

    let umur1 = 'di bawah umur'
    let umur2 = 'young adult'
    let umur3 = 'dewasa'
    let umur4 = 'tua'

    if(!n(usia)){
        return 'Invalid age'
    }
    if(usia <= 17){
        console.log('Anda adalah seorang ' + umur1);
    }
    if(usia <= 29){
        console.log('Anda adalah seorang ' + umur2);
    }
    if(usia <= 60){
        console.log('Anda adalah seorang ' + umur3);
    }
    if(usia > 60){
        console.log('Anda adalah seorang ' + umur4);
    }
}

console.log(checkUsia(0, checkValidasi));
console.log(checkUsia(10, checkValidasi));
console.log(checkUsia('50', checkValidasi));
console.log(checkUsia(60, checkValidasi));
console.log(checkUsia(29.5, checkValidasi));
console.log(checkUsia('muda', checkValidasi));
console.log(checkUsia(true, checkValidasi));
