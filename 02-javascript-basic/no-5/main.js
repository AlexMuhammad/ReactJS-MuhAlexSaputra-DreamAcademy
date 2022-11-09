function checkNameLength(name) {
  if (name.length < 20) {
    return "Halo, " + name;
  }
  if (name.length >= 20) {
    return "Panjang umur yang mulia " + name;
  }
  return "Maaf, saya tidak bisa mengeja namanya";
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

function checkValidasi(param) {
  if (typeof param !== "number") {
    return false;
  }
  return param >= 0 && Number.isInteger(param) ? true : false;
}

function objectInfo(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Saya tidak bisa membaca data anda";
  }

  let describe = "anda adalah masuk pada golongan" + checkUsia(obj.age, checkValidasi);
  let name = checkNameLength(obj.name);

  return name + describe;
}

let showResult = [{ name: "jokowi", age: 50 }, { name: "Sri Sultan Hamengkubuwono I", age: 50 }, { name: "prabowo" }, null, 10, true, ""];

showResult.forEach(function (val) {
  console.log(objectInfo(val));
});
