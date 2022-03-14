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

//submit the user's information to localStorage
function submitName(name) {
  const submitCheck = confirm(`${name}님! 이름을 등록하겠습니까?`);
  
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
  };
};

// if the user's information is in the localStorage, locate to todo-list page
function changeMainPage() {
  location.href = "../todo/todo.html";
};

// handle login with lofin button
function handleLogin(e) {
  e.preventDefault();
  const name = userId.value;
  userId.value = "";

  const savedInfos = localStorage.getItem(USER_NAME);
  const parsedInfos = JSON.parse(savedInfos);
  userInfo = parsedInfos;
  const newUserInfo = userInfo.map(a => a.username)
  const index = newUserInfo.indexOf(name);

  if (!name ) {
    alert("이름을 입력해주세요");
  } else if ((name && parsedInfos === null)) {
    submitName(name);
  } else if ((name && parsedInfos !== null) && (index === -1)) {
    submitName(name);
  } else if ((name && parsedInfos !== null) && (index !== -1)) {
    alert(`${name}님 환영합니다!!!`);
    changeMainPage();
  };
};

btnLogin.addEventListener("click", handleLogin);