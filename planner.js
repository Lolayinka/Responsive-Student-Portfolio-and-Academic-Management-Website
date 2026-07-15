function addtask( ){
    let input = document.getElementById("taskInput");
    let task = input.value;
    if(task === ""){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `
    <span>${task}</span>
    <div>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
    </div>
    `;
    li.querySelector(".complete-btn").onclick = function () {
        li.classList.toggle("completed");
    };
    li.querySelector(".delete-btn").onclick = function () {
        li.remove();
    };
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}