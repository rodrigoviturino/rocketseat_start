var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_storage")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  console.log(listElement);

  for (todo of todos) {
    var li = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkDelete = document.createElement("a");
    var textLink = document.createTextNode(" Excluir");

    linkDelete.setAttribute("href", "#");

    var index = todos.indexOf(todo);

    linkDelete.setAttribute("onclick", "deleteTodo(" + index + ")");

    // Link Delete
    linkDelete.appendChild(textLink);
    // Li com texto de cada item do array
    li.appendChild(todoText);
    // UL
    listElement.appendChild(li);
    // Link Excluir
    li.appendChild(linkDelete);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_storage", JSON.stringify(todos));
}
