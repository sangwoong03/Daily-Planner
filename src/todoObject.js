// 코드 구현
const todoInput = document.querySelector(".input-todo");
const todoForm = document.querySelector(".todo-form");
const submitTodo = document.querySelector(".todo-form");
const todoList = document.querySelector(".todos");
const removeBtn = document.querySelector("button");

const todos = [
    {
        id: 1,
        content: "HTML",
        completed: true
    },
    {
        id: 2,
        content: "CSS",
        completed: true
    },
    {
        id: 3,
        content: "Javascript",
        completed: false
    },
]

// Load todo-list
function loadMsg() {
    todoList.innerHTML = "로딩 중...";
    setTimeout(() => { loadTodoList(todos)}, 1000);
}
function loadTodoList(todos) {
    todoList.innerHTML = todos.map(todo => createHTMLElemnet(todo)).join('');
}

function createHTMLElemnet(todo) {
        return `<li>
            <label>
                <input type="checkbox" ${todo.completed ? "checked" : ""}> ${todo.content}
            </label>
            <button> x </button>
        </li>`
}

loadMsg();


// add and remove list function 추가하기