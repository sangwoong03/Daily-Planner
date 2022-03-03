const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".input-todo")
const todoList = document.querySelector(".todo-list");
const delBtn = document.querySelector(".del");

let todos = [];
const TODOS_LIST = "todos";

function clearTodos() {
  
}

function saveTodos() {
  localStorage.setItem(TODOS_LIST, JSON.stringify(todos));
}

function handleTodos(todoValueObj) {
  // add todo things in the todo list 
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  delBtn.innerText = "❌";

  li.innerHTML = `<label>
                   <input type="checkbox">
                   ${todoValueObj.text}
                  </label>`;

  li.id = todoValueObj.id;
  li.appendChild(delBtn);
  todoList.appendChild(li);
  
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
};

// delete todo things in the todo list
function removeTodos(e) {
  const delLi = e.target.parentElement;
  delLi.remove();
};

// if there are data in the localstorage, render the data
function loadTodoList() {
  const savedTodos = localStorage.getItem(TODOS_LIST);

  if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((todoValueObj)=> {
      handleTodos(todoValueObj.text);
    });
  };
};


// main function for this whole project
function main() {
  loadTodoList()
  todoForm.addEventListener("submit", submitTodos);
}
main()
