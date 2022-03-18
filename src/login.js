import { USER_INFO } from "./modal.js";

const loginForm = document.querySelector(".login-form");
const userId = document.querySelector("#userid");
const userPw = document.querySelector("#userpw");
const resetAll = document.querySelector(".reset");
const Btn = document.querySelector(".login-btn");

// 로컬스토리지 중 key: USER_INFO 리셋기능 추가하기
function resetUserInfo() {
  localStorage.clear();
}
function fetchUserInfo(name, pw) {
  const savedInfos = localStorage.getItem(USER_INFO);
  const parsedInfos = JSON.parse(savedInfos);
  const newUserName = parsedInfos.map(a => a.username);
  const newUserPw = parsedInfos.map(a => a.userpw);

  const indexId = newUserName.indexOf(name);
  const indexPw = newUserPw.indexOf(pw);
  console.log(indexId, newUserPw);

  if ((indexId === -1 ) && (indexPw === -1 )) {
    alert("회원 정보를 등록해주세요")
  } else if ((indexId === -1 ) || (indexPw === -1 )) {
    alert("아이디 혹은 비밀번호를 확인해주세요")
  } else if ((indexId !== -1 ) && (indexPw !== -1 )) {
    changeMainPage(name);
  }
}


// if the user's information is in the localStorage, locate to todo-list page
function changeMainPage(name) {
  const textAlert = `${name}님 환영합니다`;

  alert(textAlert);
  if (alert) { location.href = "../todo/todo.html" };
};

// handle login with lofin button
function handleLogin(e) {
  e.preventDefault();
  const name = userId.value;
  const pw = userPw.value;
  userId.value = "";
  userPw.value = "";

  const savedInfos = localStorage.getItem(USER_INFO);

  if (!name || !pw ) {
    alert("아이디와 비밀번호를 입력해주세요");
  } else if ((name && pw && savedInfos === null)) {
    alert("아이디와 비밀번호를 등록해주세요");
  } else if ((name && pw && savedInfos !== null)) {
    fetchUserInfo(name, pw);
  };
};

function loginMain(){
  loginForm.addEventListener("submit", handleLogin);
  resetAll.addEventListener("click", resetUserInfo);
}
loginMain();