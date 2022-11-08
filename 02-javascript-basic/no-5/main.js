function checkNameLength(name) {
  if (name.length < 20) {
    return "Halo, ", name;
  }
  if (name.length >= 20) {
    return "Panjang umur yang mulia ", name;
  }
  return "Maaf, saya tidak bisa mengeja namanya";
}

function checkValidasi(param) {
  if (typeof param !== "number") {
    return false;
  }
  return param >= 0 && Number.isInteger(param) ? true : false;
}

function checkUsia(usia, n) {
  if (!n(usia)) {
    return "Invalid age";
  }
  if (usia <= 17) {
    return "dibawah umur";
  }
  if (usia <= 29) {
    return "young adult";
  }
  if (usia <= 60) {
    return "dewasa";
  }
  if (usia > 60) {
    return "tua";
  }
}

function objectInfo(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Saya tidak bisa membaca data anda";
  }

  let describe = checkUsia(obj.age, checkValidasi);
  let name = checkNameLength(obj.name);

  return name, describe;
}

let showResult = [{ name: "jokowi", age: 50 }, { name: "prabowo" }, null, 10, true, ""];

showResult.forEach(function (val) {
  console.log(objectInfo(val));
});
// objectInfo({name: 'jokowi', age:50});
// objectInfo({name: 'prabowo'});
// objectInfo(null)
// objectInfo(10);
// objectInfo(true)
