const clearAll = document.querySelector(".clear-all");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".input-todo")
const todoList = document.querySelector(".todo-list");
const delBtn = document.querySelector(".del");
const counter = document.querySelector(".todo-counter");
const mobileAddTodo = document.querySelector(".mobile-submit");

let todos = [];
const TODOS_LIST = "todos";

// clear all data about todo things in list (ul elements) and localStorage.
function clearTodos() {
  while ( todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }

  localStorage.removeItem(TODOS_LIST);
  todos = [];

  counterTodo();
};

// save todo things 
function saveTodos() {
  localStorage.setItem(TODOS_LIST, JSON.stringify(todos));
}

function handleTodos(todoValueObj) {
  // add todo things in the todo list 
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  delBtn.innerText = "❌";

  li.innerHTML = `<label>
                   <input id="${todoValueObj.id}" class="completed" type="checkbox">
                   ${todoValueObj.text}
                  </label>`;

  li.id = todoValueObj.id;
  li.appendChild(delBtn);
  todoList.appendChild(li);
  
  document.addEventListener("change", function(e) {
    if ((e.target && e.target.id === li.id)) {
      e.target.checked ? 
        li.style.textDecoration = "line-through":
        li.style.textDecoration = "none"
    };
  });
  
  // // delete todo things in the todo list
  delBtn.addEventListener("click", removeTodos);
}

// for writting todo things in the input box
function submitTodos(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value= "";

  const todoValueObj = {
    text: todoValue,
    id: todos.length + 1
  };

  if (todoValue.length > 0 ) {
    todos.push(todoValueObj);
    handleTodos(todoValueObj); 
    saveTodos();
  } else {
    alert("할 일을 입력해주세요.");
  };
  counterTodo();
}

// delete todo things in the todo list
function removeTodos(e) {
  const delLi = e.target.parentElement;
  delLi.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(delLi.id));
  saveTodos();
  counterTodo();
}

// if there are data in the localstorage, render the data
function loadTodoList() {
  const savedTodos = localStorage.getItem(TODOS_LIST);

  if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((todo) => {
      handleTodos(todo)
    });
    counterTodo();
  };
}

function counterTodo() {
  counter.innerText = `${todos.length}개 남았습니다.`
  if ( todos.length === 0) {
    counter.innerText = ""
  };
}

// main function for this whole project
function main() {
  loadTodoList();
  todoForm.addEventListener("submit", submitTodos);
  clearAll.addEventListener("click", clearTodos);
}
main();
