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
    todoList.appendChild(listItem);
    listItem.appendChild(document.createTextNode(todoInput.value));
    linkDel.addEventListener('click', function (e){
        e.target.parentElement.parentElement.remove();
        deleteFromLocalStorage( e.target.parentElement.parentElement)
    });
    listItem.addEventListener('click', function(){
        listItem.classList.toggle('completed');
    });
   
     
    clearBtn.classList.add('show-btn');
    
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

document.addEventListener("DOMContentLoaded", function(){
    todos.forEach(function(todo){
        const listItem = document.createElement('li');
        const linkDel = document.createElement('a');
        linkDel.innerHTML = `<i class="far fa-trash-alt"></i>`;
        listItem.appendChild(linkDel);
        listItem.appendChild(document.createTextNode(todo));
        todoList.appendChild(listItem);
        linkDel.addEventListener('click', function (e){
            e.target.parentElement.parentElement.remove();
            deleteFromLocalStorage(e.target.parentElement.parentElement)
        });
        listItem.addEventListener('click', function(){
            listItem.classList.toggle('completed');
        });
       
        clearBtn.classList.add('show-btn')
    })
})


// Delete todo

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
    localStorage.clear();
    todos = [];
    clearBtn.classList.remove('show-btn')
})
