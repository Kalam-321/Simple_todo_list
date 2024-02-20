const formTodo = document.querySelector(".form-todo");
const inputTodo = document.querySelector(".form-todo input[type = 'text']")
const todoList = document.querySelector(".todo-list")
console.log(inputTodo.outerHTML)
formTodo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodoText = inputTodo.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span class="text">${newtodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi)
    inputTodo.value = ""
})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done"))
    {
        console.log("Job done");
        const liSpan = e.target.parentNode.previousElementSibling;
        console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove"))
    {
        console.log("Removed the job done");
        const targetedElement = e.target.parentNode.parentNode;
        targetedElement.remove();
    }
})