function checkNameLength(name){
    if(name.length < 20){
        console.log('Halo ' + name);
        return;
    }
    if(name.length >= 20){
        console.log('panjang umur yang mulia ' + name)
        return;
    }
    console.log('Maaf, saya tidak bisa mengeja namanya');
}

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

function objectInfo(obj){
    if(typeof obj !== 'object'){
        console.log('Saya tidak bisa membaca data anda')
        return
    }

    checkUsia(obj.age, checkValidasi);
    checkNameLength(obj.name);
}

objectInfo({name: 'jokowi', age:50});
objectInfo({name: 'prabowo'});
objectInfo(null)
objectInfo(10);
objectInfo(true)