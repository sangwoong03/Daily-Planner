// 로그인 코드 구현
const userId = document.querySelector("#userid");
const btnLogin = document.querySelector(".btn-login");
const warningMsg = document.querySelector(".warning-msg");

// save the user information in the localStorage
let userInfo = [];
const USER_NAME = "username";

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
    setTimeout(alert("등록이 완료되었습니다. \n다시 로그인 해주세요"), 500);
  };
};

function saveUserName() {
  localStorage.setItem(USER_NAME, JSON.stringify(userInfo));
};


// if the user's information is in the localStorage, locate to todo-list page
function changeMainPage(name) {
  const textAlert = `${name}님 어제보다 나을 필요는 없습니다. \n오늘을, 지금 이 시간을 즐기세요!!`;

  alert(textAlert);
  if (alert) { location.href = "../todo/todo.html" };
};

// handle login with lofin button
function handleLogin(e) {
  e.preventDefault();
  const name = userId.value;
  userId.value = "";

  const savedInfos = localStorage.getItem(USER_NAME);

  if (!name ) {
    alert("이름을 입력해주세요");
  } else if ((name && savedInfos === null)) {
    submitName(name);
  } else if ((name && savedInfos !== null)) {
    const parsedInfos = JSON.parse(savedInfos);
    userInfo = parsedInfos;
    const newUserInfo = userInfo.map(a => a.username);
    const index = newUserInfo.indexOf(name);
    (index === -1 ) ? submitName(name) : changeMainPage(name);
  };
};

// 로컬스토리지 중 USER_INFO 리셋기능 추가하기
function resetUserInfo() {
}

btnLogin.addEventListener("click", handleLogin);
