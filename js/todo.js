const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const reset = document.querySelector("reset");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo !== parseInt(li.id));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("liBox");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("x-btn");
  button.addEventListener("click", deleteToDo);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function handleReset() {
  localStorage.removeItem(todos);
}

todoForm.addEventListener("submit", handleToDoSubmit);
reset.addEventListener("submit", handleReset);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
