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
}

});

deleteButton.addEventListener("click", function() {

});