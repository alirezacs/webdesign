let form = document.getElementById('form');
let titleInput = document.getElementById('title');

titleInput.addEventListener('keydown', e => {
    if (e.key === '\\') {
        e.preventDefault();
    }
});

// Create New Task
form.addEventListener('submit', e => {
    e.preventDefault();

    let task = titleInput.value;

    if(task.length === 0){
        console.log("Task Title Is Invalid");
        titleInput.style.border = '1px solid red';
    }else{

        // Store In Localstorage
        let oldTasks = localStorage.getItem('tasks') || "[]";
        let old = JSON.parse(oldTasks);
        old.push(task);
        
        let newTasks = JSON.stringify(old);
        localStorage.setItem('tasks', newTasks);

        titleInput.value = '';

        loadTasks(JSON.parse(newTasks));
    }
})

window.onload = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    loadTasks(tasks);
}

// Make Dynamic Tasks List
const loadTasks = (tasks) => {    
    let list = document.getElementById('list');
    list.innerHTML = '';
    for(let i = 0; i < tasks.length; i++){
        list.innerHTML += `
            <div class="item">
                <div class="title">${tasks[i]}</div>
                <button onclick="removeItem('${i}')">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `
    }
}

// Remove Item
const removeItem = index => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remove task by index
    tasks.splice(index, 1);

    // Update localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update UI
    loadTasks(tasks);
}