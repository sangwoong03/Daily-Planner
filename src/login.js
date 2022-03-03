// 로그인 코드 구현
const userId = document.querySelector("#userid");
const userPw = document.querySelector("#userpw");
const btnLogin = document.querySelector(".btn-login");
const warningMsg = document.querySelector(".warning-msg");


// 아이디 alert창
btnLogin.onclick = () => {
    const id = userId.value;
    const idLen = userId.value.length;
    const pwLen = userPw.value.length;
    
    if (idLen !== 0 && pwLen !== 0) {
        alert(`${id}님 어서오세요`);
        
    } else if (idLen === 0 && pwLen !== 0) {
        alert("아이디를 입력해주세요");
    } else if (idLen !== 0 && pwLen === 0) {
        alert("비밀번호를 입력해주세요");
    } else {
        alert("아이디와 비밀번호를 입력해주세요");
    };
};

// 비밀번호 경고문 창 
// 정규식 표현으로 변경하기
userPw.onkeydown = () => {
    const id = userId.value;
    const pw = userPw.value;

    if (id !== "" && (pw.length > 6 && pw.length < 19)) {
        warningMsg.innerHTML = ""
        btnLogin.removeAttribute('disabled')
    } else if(id !=="" && (pw.length < 6 || pw.length > 19)) {   
        warningMsg.innerHTML = "<div style='color:red; font-size: 12px'> 비밀번호는 영어, 숫자 포함 8자 ~ 20자입니다 </div>"
        btnLogin.setAttribute('disabled', 'disabled');
    } else if (id == "" && pw !== "") {
        warningMsg.innerHTML = "<div style='color:red; font-size: 12px'> 아이디를 입력해주세요 </div>"
        btnLogin.setAttribute('disabled', 'disabled');
    }
};

