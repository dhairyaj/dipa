let formData = document.getElementById("addtaskPopup");
let taskName = document.getElementById("taskname");
let taskDueDate = document.getElementById("taskduedate");
let taskError = document.getElementById("errorText");
let dateError = document.getElementById("errorDate");
let tasks = document.getElementById("tasks");
let appendBtn = document.getElementById("appendBtn");
let closeBtn = document.getElementById("closeBtn");
let closeSign = document.getElementById("closeSign");

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if(day < 10) {
    day = '0' + day;
}
if(month < 10) {
    month = '0' + month;
}

let minDate = year + "-" + month + "-" + day;
taskDueDate.setAttribute('min', minDate);

closeBtn.addEventListener("click", () => {
    resetOnClose();
})

closeSign.addEventListener("click", () => {
    resetOnClose();
})

formData.addEventListener("submit", (e) => {
    e.preventDefault();
    formValdiation();
})

let formValdiation = () => {
    if(taskName.value === "" && taskDueDate.value === ""){
        taskError.innerText = "Field cannot be empty.";
        dateError.innerText = "Field cannot be empty."
    } else if(taskName.value === "" && taskDueDate.value !== "") {
        taskError.innerText = "Field cannot be empty.";
        dateError.innerText = ""
    } else if(taskName.value !== "" && taskDueDate.value === "") {
        taskError.innerText = "";
        dateError.innerText = "Field cannot be empty."
    } else {
        taskError.innerText = "";
        dateError.innerText = "";
        acceptData();
        appendBtn.setAttribute("data-bs-dismiss", "modal")
        appendBtn.click();
        (() => {
            appendBtn.setAttribute("data-bs-dismiss", "")
        })()
    }
}

let taskList = {};

let acceptData = () => {
    taskList["goal"] = taskName.value;
    taskList["dueDate"] = taskDueDate.value;
    updateTasks();
}

let updateTasks = () => {
    tasks.innerHTML += `<div class="task">
            <span>${taskList.goal}</span>
            <span class="text-muted">${taskList.dueDate}</span>
            <hr>
            <div class="options">
                <i data-bs-toggle="modal" data-bs-target="#addtaskPopup" onClick = "editTask(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick = "deleteTask(this)" class="fa-solid fa-trash-can"></i>
            </div>
        </div>`;
    resetForm();
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    taskName.value = selectedTask.children[0].innerText;
    taskDueDate.value = selectedTask.children[1].innerText;
    console.log(selectedTask.children[1]);
    e.parentElement.parentElement.remove();
}

let resetForm = () => {
    taskName.value = "";
    taskDueDate.value = "";
}

let resetOnClose = () => {
    taskName.value = "";
    taskDueDate.value = "";
    taskError.innerText = "";
    dateError.innerText = "";
}