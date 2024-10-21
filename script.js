document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        // Create complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        // Add buttons to list item
        const actions = document.createElement('div');
        actions.classList.add('todo-actions');
        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);
        li.appendChild(actions);

        todoList.appendChild(li);
        inputField.value = '';
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});