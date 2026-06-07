const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div class="actions">
            <button class="complete-btn">✓</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const taskSpan = li.querySelector(".task-text");
    const completeBtn = li.querySelector(".complete-btn");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    // Complete Task
    completeBtn.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Edit Task
    editBtn.addEventListener("click", () => {
        const currentText = taskSpan.textContent;

        const newText = prompt("Edit task:", currentText);

        if (newText !== null && newText.trim() !== "") {
            taskSpan.textContent = newText.trim();
        }
    });

    // Delete Task
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
}
