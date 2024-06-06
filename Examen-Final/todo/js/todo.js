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
   
}

function addTask() {
    
}

});