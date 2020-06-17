var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

renderToDo();

function renderToDo() {
    listElement.innerHTML = "";
    for(todo of todos){

        var toDoElement = document.createElement('li');
        var textToDo = document.createTextNode(todo);
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        toDoElement.appendChild(checkbox);
        toDoElement.appendChild(textToDo);

        var linkElement = document.createElement('a');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        

        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement);
        
        
        
    }
}

function addTodo() {
    var text = inputElement.value;
    if(text!=""){
        todos.push(text);
    }
    else {
        alert("Você não digitou nada");
    }
    inputElement.value = "";
    renderToDo();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos,1);
    renderToDo();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}