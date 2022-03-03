const today = new Date();

let day = today.getDay()
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

switch (day) {
  case 0:
    day = "일"
    break
  case 1:
    day = "월"
    break
  case 2:
    day = "화"
    break
  case 3:
    day = "수"
    break
  case 4:
    day = "목"
    break
  case 5:
    day = "금"
    break
  case 6:
    day = "토"
    break
};

function loadToday() {
  const todoToday = document.querySelector(".todo-today");

  todoToday.innerHTML = `<p class=today> ${year}년 ${month + 1}월 ${date}일 ${day}요일 </p>`
};

loadToday()