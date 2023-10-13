document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Add event listener to delete button
            listItem.querySelector(".delete-button").addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});
