// 코드 구현
const container = document.querySelector(".container");
const isDark = document.querySelector(".dark-mode")
const modeText = document.querySelector(".mode-text");
const checkBox = document.querySelector(".dark-check");
const todoBox = document.querySelector(".todos");

isDark.onclick = () => {
    isDark.checked ? dark() : light();
    localStorage.setItem("currentmode", isDark.checked);
};

window.addEventListener('load', () => {
    if (localStorage.getItem("currentmode")==="true") {
        dark();
        isDark.checked = true;
    };
});

function dark() {
    container.classList.add("dark");
    checkBox.style.border = "1px solid #fff";
    checkBox.setAttribute("data-key", "dark");
    todoBox.style.border = "1px solid #fff";
    modeText.innerHTML = "다크모드";
}

function light() {
    container.classList.remove("dark");
    checkBox.style.border = "1px solid #333";
    checkBox.setAttribute("data-key", "light");
    todoBox.style.border = "1px solid #333";
    modeText.innerHTML = "라이트모드";
}
