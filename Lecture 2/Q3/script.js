const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".task-list");

let draggedTask = null;

// Add drag events to each task
tasks.forEach(task => {

    task.addEventListener("dragstart", () => {
        draggedTask = task;
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });

});

// Add drop events to columns
columns.forEach(column => {

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", () => {
        column.classList.remove("drag-over");
    });

    column.addEventListener("drop", () => {
        column.classList.remove("drag-over");

        if (draggedTask) {
            column.appendChild(draggedTask);
        }
    });

});
