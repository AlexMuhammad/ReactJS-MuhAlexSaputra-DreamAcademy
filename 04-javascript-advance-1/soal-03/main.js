const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const randomNum = Math.trunc(Math.random() * 99);
  if (randomNum % 2 === 1) {
    console.log(randomNum, "Menang");
    return;
  }
  console.log(randomNum, "Kalah");
});
