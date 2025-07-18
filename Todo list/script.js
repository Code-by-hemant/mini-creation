document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function() {
        const task = input.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.className = 'delete-btn';
            delBtn.onclick = function() {
                todoList.removeChild(li);
            };
            li.appendChild(delBtn);
            li.addEventListener('click', function(e) {
                if (e.target !== delBtn) {
                    li.classList.toggle('completed');
                }
            });
            todoList.appendChild(li);
            input.value = '';
        }
    });
});