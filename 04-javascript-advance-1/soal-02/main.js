const form = document.getElementById("myForm");
const nama = document.getElementById("namaInput");
const birthday = document.getElementById("birthdayInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  infoNative();
  infomoment();
});
function infoNative() {
  const date = new Date(birthday.value);
  const today = new Date();
  const birthdayNew = new Date(today.getFullYear(), date.getMonth(), date.getDate());
  const birthdayLeft = Math.ceil((birthdayNew.getTime() - today.getTime()) / (1000 * 3600 * 24));
  if (birthday == "null" || birthday == "") {
    return false;
  } else {
    const month = Date.now() - date.getTime();
    const ageConvert = new Date(month);
    const year = ageConvert.getFullYear();
    const age = Math.abs(year - 1970);

    const note = birthdayLeft < 0 ? `${birthdayLeft} hari  yang lalu` : `${birthdayLeft} hari lagi`;
    console.log(`Halo, ${nama.value} Usia anda adalah ${age} tahun. Anda Berulang tahun ${note} `);
  }
}

function infomoment() {
  const date = moment(birthday.value);
  const today = moment();
  const birthdayNew = moment({
    year: today.year(),
    month: date.month(),
    date: date.date(),
  });
  const birthdayLeft = birthdayNew.diff(today, "day");
  const age = today.diff(date, "year");
  if (birthday == "null" || birthday == "") {
    return false;
  } else {
    const note = birthdayLeft < 0 ? `${birthdayLeft} hari  yang lalu` : `${birthdayLeft} hari lagi`;
    console.log(`Halo, ${nama.value} Usia anda adalah ${age} tahun. Anda Berulang tahun ${note} `);
  }
}
