document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addButton = document.getElementById("add-button");
    const totalTasksSpan = document.getElementById("total-tasks");
    const completedTasksSpan = document.getElementById("completed-tasks");

    addButton.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button>Delete</button>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = "";
            updateTaskCount();
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            event.target.parentElement.remove();
            updateTaskCount();
        }
    });

    taskList.addEventListener("change", function (event) {
        if (event.target.type === "checkbox") {
            const taskItem = event.target.parentElement;
            if (event.target.checked) {
                taskItem.classList.add("completed");
            } else {
                taskItem.classList.remove("completed");
            }
            updateTaskCount();
        }
    });

    function updateTaskCount() {
        const totalTasks = taskList.children.length;
        const completedTasks = Array.from(taskList.children).filter((item) =>
            item.querySelector("input[type='checkbox']").checked
        ).length;
        totalTasksSpan.textContent = totalTasks;
        completedTasksSpan.textContent = completedTasks;
    }
});
