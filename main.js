//selectors
const todo_input = document.querySelector('.todo-input');
const todo_button = document.querySelector('.todo-button');
const todo_list = document.querySelector('.todo-list');

//event listeners

todo_button.addEventListener("click", addTodo);
todo_list.addEventListener("click",deleteCheck);


//functions
function addTodo(event) {
    
    //prevent default form submitting
    event.preventDefault();
    //create div
    const todoDiv = document.createElement("div");
    //create div class
    todoDiv.classList.add("todo");
    //create li
    const newTodoEle = document.createElement('li');
    newTodoEle.innerText = todo_input.value;
    newTodoEle.classList.add('newEle');
    //making the li inside div
    todoDiv.appendChild(newTodoEle);

    //create checked button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    checkedButton.classList.add('check-btn');
    todoDiv.appendChild(checkedButton);

    //create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append this div to the ul(list)
    todo_list.appendChild(todoDiv);
    
    //clear todo input value
    todo_input.value = "";
}

function deleteCheck(e)
{
    const item = e.target;
    if(item.classList[0] === "trash-btn")
    {
       const todo = item.parentElement;
       todo.remove();
    }
}

