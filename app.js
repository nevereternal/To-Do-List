const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.list');
const clearBtn = document.querySelector('.clear');
const todoInput = document.querySelector('#todo');

todos = JSON.parse(localStorage.getItem('todos')) || [];
 

// Add ToDo
form.addEventListener('submit', function addTodo(e){
    if(todoInput.value === ''){
        alert('Add a to-do!')
    } else {
    const listItem = document.createElement('li');
    const linkDel = document.createElement('a');
    linkDel.innerHTML = `<i class="far fa-trash-alt"></i>`;
    listItem.appendChild(linkDel);
    listItem.appendChild(document.createTextNode(todoInput.value));
    todoList.appendChild(listItem);
    if (todoInput.value){
        clearBtn.classList.add('show-btn')
    }
    SetToLocalStorage(todoInput.value);
    todoInput.value = '';
    e.preventDefault();
    }
});


function SetToLocalStorage(todo){
    JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    }

document.addEventListener("DOMContentLoaded", function getFromLocalStorage(){
    todos.forEach(function(todo){
        const listItem = document.createElement('li');
        const linkDel = document.createElement('a');
        linkDel.innerHTML = `<i class="far fa-trash-alt"></i>`;
        listItem.appendChild(linkDel);
        listItem.appendChild(document.createTextNode(todo));
        todoList.appendChild(listItem);
        if (todoInput.value){
            clearBtn.classList.add('show-btn')
        }
    })
})


// Delete todo

todoList.addEventListener('click', function(e){
    e.target.parentElement.parentElement.remove();
    deleteFromLocalStorage(e.target.parentElement.parentElement);
})

function deleteFromLocalStorage(someval){
    todos.forEach(function(todo, index){
        if(someval.textContent === todo){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Clear todos

clearBtn.addEventListener('click', function (e){
    todoList.innerHTML = '';
    localStorage.clear()
})
