function checkNameLength(name){
    if(name.length < 20){
        console.log('Halo ' + name);
        return false;
    }
    if(name.length >= 20){
        console.log('panjang umur yang mulia ' + name)
        return false;
    }
    console.log('Maaf, saya tidak bisa mengeja namanya');
}

checkNameLength('Jhon doe');
checkNameLength('Sri Sultan Hamengkubuwono I');
checkNameLength(10);
checkNameLength(true)