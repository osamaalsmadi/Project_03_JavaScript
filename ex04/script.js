let taskInput = document.getElementById("taskInput");
let btnAdd = document.getElementById("btnAdd");
let taskList = document.getElementById("taskList");
let taskCountText = document.getElementById("taskCount");

let count = 0; 

btnAdd.addEventListener("click", function() {
    let taskText = taskInput.value;

    if (taskText !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = taskText + " ";
        
        newTask.addEventListener("click", function() {
            if (newTask.style.textDecoration === "line-through") {
                newTask.style.textDecoration = "none";
                newTask.style.color = "black";
            } else {
                newTask.style.textDecoration = "line-through";
                newTask.style.color = "gray";
            }
        });
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); 
            newTask.remove();
            count--;
            taskCountText.textContent = count;
        });
        
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        
        taskInput.value = "";
        
        count++;
        taskCountText.textContent = count;
    }
});

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        btnAdd.click();
    }
});
