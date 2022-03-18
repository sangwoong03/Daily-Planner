
const signInBtn = document.querySelector(".sign-in");
const signInIdBox = document.querySelector(".sign-in-id");
const signInPwBox = document.querySelector(".sign-in-pw");
const modalForm = document.querySelector(".sign-in-wrap");
const modalCheck = document.querySelector(".sign-check");
const modalCancle = document.querySelector(".sign-cancle");
const signId = document.querySelector("#sign-id");
const signPw = document.querySelector("#sign-pw");
const issuePwBtn = document.querySelector(".issue-pw");

export let userInfo = [];
export const USER_INFO = "userinfo";

function saveUserInfo() {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
}

//submit the user's information to localStorage
export function submitInfo() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const nameInfo = {
    username: signId.value,
    useddate: `${year}년 ${month}월 ${day}일`,
    id: userInfo.length + 1,
    userpw: signPw.value
  };

  const submitCheck = confirm("등록이 완료되었습니다.");

  if (submitCheck) {
    userInfo.push(nameInfo);
    saveUserInfo();
    modalForm.classList.add("display")
    signId.value = ""
    signPw.value = ""
  };
}

issuePwBtn.onclick = () => {
  const password = Math.floor((Math.random() * 900000 + 99999));
  signPw.value = password;
}

signInBtn.onclick = () => {
  if ( modalForm.classList.contains("display") ) { 
    modalForm.classList.remove("display")
  };
}

modalCheck.onclick = () => { 

  if ( signId.value === "" ) {
    alert("아이디를 입력해주세요");
    signId.focus();
  } else if ( signPw.value === "" ) {
    alert("키를 발급 받으세요");
  } else if (signId.value && signPw.value) {
    submitInfo()
  }
}

modalCancle.onclick = () => {
  if ( !modalForm.classList.contains("display") ) {
    modalForm.classList.add("display");
  }
}
modalForm.onclick = (e) => {
  if (e.target.className === "sign-in-wrap") {
    modalForm.classList.add("display")
  };
}