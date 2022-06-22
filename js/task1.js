// Створити ToDoList

// інпут введення назви завдання, валідація (поле обов'язкове)
// при кліку на кнопку додати, завдання з'являється під формою, якщо поставити галочку біля завдання, то текст перекреслюється 
// якщо забрати галочку то перекреслення зникає
// можливість видалити завдання
const form = document.querySelector("form")
const input = form.elements["taskName"]
const addButton = form.elements["addButton"]
const taskInput = form.elements["taskName"]
const toDoContainer = document.querySelector(".toDoListConatiner")
function errorCheck(){
    const formError = form.lastElementChild
    console.log(formError)
    if(formError.classList.contains("error")){
        formError.remove()
    }
}
taskInput.addEventListener("blur",function(){
    validation(taskInput)
})
console.dir(taskInput)
function validation(obj){
    let error = true
    if(obj.value.trim()===""){
        errorCheck()
        form.insertAdjacentHTML("beforeend",'<div class="error">input task field is empty</div>')
        error = false
    }else{
        errorCheck()
    }
    return error
}
// form.insertAdjacentElement("beforeend",`<div class="task m-auto col-8 d-flex justify-content-between"><div class="col-11 m-auto"><input type="checkbox" id="checkbox" class="my-auto ms-1"> <label for="checkbox">${}</label></div><button class="col-1">×</button></div>`)

form.addEventListener("submit",function(e){
    e.preventDefault()
})
taskInput.addEventListener("change",function(){
    validation(taskInput)
})
let counter = 0
addButton.addEventListener("click",function(){
    if(validation(taskInput)){
        counter+=1
        toDoContainer.insertAdjacentHTML("beforeend",`<div class="task m-auto col-8 d-flex justify-content-between">
        <div class="col-11 m-auto">
            <input type="checkbox" id="checkbox${counter}" name="task" class="taskCheck my-auto ms-1">
            <label name="taskLabel" for="checkbox${counter}" class="taskLabel">${taskInput.value}</label>
        </div>
        <button class="col-1 removeBtn">×</button>
    </div>`)
        taskInput.value=""
    }
})
toDoContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("removeBtn")){
        let removeBtnParent = e.target.closest(".task")
        removeBtnParent.remove()
    }
    if(e.target.classList.contains("taskCheck")){
        let label = e.target.labels[0]
        console.log(e.target.labels)
        label.classList.toggle("underline")
    }
})
