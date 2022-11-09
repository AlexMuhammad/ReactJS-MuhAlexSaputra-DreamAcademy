function checkNameLength(name) {
  if (name.length < 20) {
    return "Halo ", name;
  }
  if (name.length >= 20) {
    return "panjang umur yang mulia ", name;
  }
  return "Maaf, saya tidak bisa mengeja namanya";
}

let showResult = ["John Due", "Sri Sultan Hamengkubuwono I", 10, true];

showResult.forEach(function (val) {
    console.log(checkNameLength(val));
})
