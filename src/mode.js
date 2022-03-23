const choiceMode = document.querySelector(".dark-mode");
const textMode = document.querySelector(".mode-text")
const body = document.querySelector("body");
const box = document.querySelector(".box");
const todoBox = document.querySelector(".container-todo");
const clearBtn = document.querySelector(".clear-all");
const todoUl = document.querySelector(".todo-list");
const mobileBtn = document.querySelector(".mobile-submit");
const submitImg = document.querySelector(".submit-img");


const MODE = "mode"

function changeMode() {
  choiceMode.checked ? light() : dark();
  localStorage.setItem(MODE, choiceMode.checked);
}

function loadViewMode() {
  const viewMode = localStorage.getItem(MODE);

  if (viewMode === "false") {
    dark();
    choiceMode.checked = false;
  } else {
    light();
    choiceMode.checked = true;
  }
}

function light() { 
  textMode.innerText = "라이트모드"
  body.classList.add("light");
  box.classList.add("light");
  todoBox.classList.add("light");
  clearBtn.classList.add("light");
  todoUl.classList.add("light");
  mobileBtn.classList.add("light");
  submitImg.classList.add("light");
}

function dark() {
  textMode.innerText = "다크모드"
  body.classList.remove("light");
  box.classList.remove("light");
  todoBox.classList.remove("light");
  clearBtn.classList.remove("light");
  todoUl.classList.remove("light");
  mobileBtn.classList.remove("light");
  submitImg.classList.remove("light");
}

function modeMain() {
  loadViewMode();
  choiceMode.addEventListener("change", changeMode);
}
modeMain();