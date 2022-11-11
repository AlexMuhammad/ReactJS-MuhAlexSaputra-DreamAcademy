const checkLog = document.getElementById("checkLog");
const logs = [];

checkLog.addEventListener("click", function (e) {
  const time = moment().format("HH:mm:ss");
  logs.push(time);

  logs.map(function (el) {
    const tes = el.split(":");

    console.log(`Tercatat jam ${tes[0]}, menit ${tes[1]}, detik ${tes[2]}`);
  });
});
