function checkValidasi(param){
    if(typeof param !== 'number'){
        return false;
    }
    return param >= 0 && Number.isInteger(param) ? true : false;
}

function checkUsia(usia, n){

    if(!n(usia)){
        return 'Invalid age'
    }
    if(usia <= 17){
        return 'dibawah umur'
    }
    if(usia <= 29){
        return 'young adult'
    }
    if(usia <= 60){
        return 'dewasa'
    }
    if(usia > 60){
        return 'tua'
    }
}

let showResult = [0, 10, '50', 60, 29.5, 'muda', true]
showResult.forEach(function (val) {
    console.log('Anda adalah seorang', checkUsia(val, checkValidasi));
})

// console.log('Anda adalah seorang', checkUsia(0, checkValidasi));
// console.log('Anda adalah seorang', checkUsia(10, checkValidasi));
// console.log('Anda adalah seorang', checkUsia('50', checkValidasi));
// console.log('Anda adalah seorang', checkUsia(60, checkValidasi));
// console.log('Anda adalah seorang', checkUsia(29.5, checkValidasi));
// console.log('Anda adalah seorang', checkUsia('muda', checkValidasi));
// console.log('Anda adalah seorang', checkUsia(true, checkValidasi));
