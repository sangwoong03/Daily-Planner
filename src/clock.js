const clock = document.querySelector(".clock-box");

function clockNow() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerHTML = `<h2 class="time"> ${hours} : ${minutes} </h2>`;
}
clockNow();
setInterval(clockNow, 60000);
