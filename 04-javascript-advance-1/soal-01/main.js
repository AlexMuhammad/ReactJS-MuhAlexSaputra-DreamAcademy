const btn = document.querySelector("button");
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

btn.addEventListener("click", function () {
  const nameMonth = monthName[date.getMonth()];
  const today = `${day} ${nameMonth} ${year}`;
  alert(today);
});