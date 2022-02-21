const clock = document.querySelector(".clock-box");

function clockNow() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `<h2> ${hours}시 : ${minutes}분 : ${seconds}초 </h2>`;
}

clockNow();
setInterval(clockNow, 1000);
