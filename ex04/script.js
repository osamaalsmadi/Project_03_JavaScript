let taskInput = document.getElementById("taskInput");
let btnAdd = document.getElementById("btnAdd");
let taskList = document.getElementById("taskList");
let taskCountText = document.getElementById("taskCount");

let count = 0; 

btnAdd.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = taskText + " ";
        
        newTask.tabIndex = 0;
        newTask.addEventListener("keydown", function(event) {
            if (event.target === newTask && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                newTask.click();
            }
        });
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
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("aria-label", "Delete task: " + taskText);
        
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); 
            newTask.remove();
            count--;
            taskCountText.textContent = count;
        });
        
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        
        taskInput.value = "";
        taskInput.focus();
        
        count++;
        taskCountText.textContent = count;
    }
});

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
});
