const form = document.getElementById("myForm");
const nama = document.getElementById("namaInput");
const birthday = document.getElementById("birthdayInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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

      console.log(nama.value + " Age is " + age + " years");
      console.log(birthdayLeft < 0 ? `${birthdayLeft} yang lalu` : `${birthdayLeft} lagi`);
    }
});
