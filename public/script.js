document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('form-a');
    const taskInput = document.getElementById('input-a');
    const taskList = document.getElementById('list-a');

    // Function to add a new task
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        // Add a checkbox to mark task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
        taskItem.appendChild(checkbox);
        
        // Add an edit button to edit task
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            const newText = prompt('Enter new task:');
            if (newText !== null && newText.trim() !== '') {
                taskItem.textContent = newText;
                taskItem.appendChild(checkbox);
                taskItem.appendChild(editButton);
                taskItem.appendChild(deleteButton); // Include delete button when editing
            }
        });
        taskItem.appendChild(editButton);

        // Add a delete button to delete task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);
    }

    // Event listener for submitting the task form
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });
});
