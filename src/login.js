// 로그인 코드 구현
const userId = document.querySelector("#userid");
const btnLogin = document.querySelector(".btn-login");
const warningMsg = document.querySelector(".warning-msg");

// save the user information in the localStorage
let userInfo = [];
const USER_NAME = "username";

function saveUserName() {
  localStorage.setItem(USER_NAME, JSON.stringify(userInfo));
};

function submitName(name) {
  const submitCheck = confirm("이름을 등록하겠습니까?");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const nameInfo = {
    username: name,
    useddate: `${year}년 ${month}월 ${day}일`,
    id: userInfo.length + 1
  };

  if (submitCheck) {
    userInfo.push(nameInfo);
    saveUserName();
    console.log(userInfo[0].username); // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2022-03-11
  }
};

function fetchName(name) {
  if (userInfo !== null) {
    console.log(name);
  } 
};

function handleLogin(e) {
  e.preventDefault();
  const name = userId.value;
  userId.value = "";
  const index = userInfo.indexOf(name)

  if (!name ) {
    alert("이름을 입력해주세요");
  } else if (name && index === -1 ) {
    submitName(name);
  } else if (name && index > -1 ) {
    fetchName(name);
  }
}

btnLogin.addEventListener("click", handleLogin);