document.addEventListener("DOMContentLoaded", function(){
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const taskList = document.getElementById("taskList");

taskInput.focus();

function updateAddButtonState() {
    addButton.disabled = taskInput.value.trim() === "";
}

function updateDeleteButtonState() {
    const anyChecked = Array.from(taskList.querySelectorAll("input[type='checkbox']")).some(checkbox => checkbox.checked);
    deleteButton.disabled = !anyChecked;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" class="taskCheckbox">
            <span class="taskText">${taskText}</span>
        `;
        taskList.appendChild(listItem);
            taskInput.value = "";
            updateAddButtonState();
            updateDeleteButtonState();
        }
    }
    taskInput.addEventListener("input", updateAddButtonState);
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            addTask();
    }
});

taskList.addEventListener("change", function(event) {
    if (event.target.classList.contains("taskCheckbox")) {
        updateDeleteButtonState();
    }
});
taskList.addEventListener(){}
deleteButton.addEventListener("click", function() {
    const checkboxes = taskList.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach(checkbox => {
        const listItem = checkbox.closest("li");
        taskList.removeChild(listItem);
    });
    updateDeleteButtonState();
});
});