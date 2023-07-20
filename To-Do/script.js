const taskList = [
    { id: 1, name: 'Task 1', description: 'Task 1 description', status: 'todo' },
    { id: 2, name: 'Task 2', description: 'Task 2 description', status: 'inProgress' },
    { id: 3, name: 'Task 3', description: 'Task 3 description', status: 'closed' },
];

const todoList = document.getElementById('todoList');
const inProgressList = document.getElementById('inProgressList');
const closedList = document.getElementById('closedList');
const addTaskBtn = document.getElementById('addTaskBtn');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskStatusInput = document.getElementById('taskStatus');
const cancelBtn = document.getElementById('cancelBtn');
const moveLeftIcon = document.getElementById('moveLeftIcon');
const moveRightIcon = document.getElementById('moveRightIcon');

const statusOrder = ['todo', 'inProgress', 'closed'];
let selectedTasks = [];

// Initialize the task lists
populateTasks();

// Add task to the task list
function addTask(event) {
    event.preventDefault();

    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    const taskStatus = taskStatusInput.value;

    const task = { id: taskList.length + 1, name: taskName, description: taskDescription, status: taskStatus };
    taskList.push(task);
    saveTasks();

    renderTask(task);

    closePopup();
    taskForm.reset();
}

// Delete task from the task list
function deleteTask(taskId) {
    taskList = taskList.filter((task) => task.id !== taskId);
    saveTasks();

    const taskElement = document.getElementById(`task-${taskId}`);
    taskElement.remove();
}

// Switch task to a different status
function switchTaskStatus(taskId, targetStatus) {
    const task = taskList.find((task) => task.id === taskId);
    if (task) {
        task.status = targetStatus;
        saveTasks();

        const taskElement = document.getElementById(`task-${taskId}`);
        const targetList = getListElement(targetStatus);
        targetList.appendChild(taskElement);
    }
}

// Populate the task lists
function populateTasks() {
    taskList.forEach((task) => {
        renderTask(task);
    });
}

// Render a task element
function renderTask(task) {
    const taskElement = createTaskElement(task);
    const targetList = getListElement(task.status);
    targetList.appendChild(taskElement);
}

// Create a new task element
function createTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.id = `task-${task.id}`;
    taskElement.classList.add('task');

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;

    const viewMoreIcon = document.createElement('span');
    viewMoreIcon.classList.add('view-more-icon');
    viewMoreIcon.innerHTML = '&#x1F50D;';
    viewMoreIcon.addEventListener('click', () => toggleTaskDetails(task.id));

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.innerHTML = '&#x1F5D1;';
    deleteIcon.addEventListener('click', () => deleteTask(task.id));

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.addEventListener('click', () => moveTask(task.id, 'inProgress'));
    buttonsContainer.appendChild(startButton);

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Finish';
    finishButton.addEventListener('click', () => moveTask(task.id, 'closed'));
    buttonsContainer.appendChild(finishButton);

    taskName.appendChild(viewMoreIcon);
    taskName.appendChild(deleteIcon);
    taskElement.appendChild(taskName);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.textContent = task.description;
    taskElement.appendChild(taskDetails);
    taskElement.appendChild(buttonsContainer);


    return taskElement;
}

// Toggle task details visibility
function toggleTaskDetails(taskId) {
    const taskElement = document.getElementById(`task-${taskId}`);
    const taskDetails = taskElement.querySelector('.task-details');
    const viewMoreIcon = taskElement.querySelector('.view-more-icon');

    if (taskDetails.style.display === 'none') {
        taskDetails.style.display = 'block';
        viewMoreIcon.innerHTML = '&#x1F50B;';
    } else {
        taskDetails.style.display = 'none';
        viewMoreIcon.innerHTML = '&#x1F50D;';
    }
}

// Move task to a different status
function moveTask(taskId, targetStatus) {
    switchTaskStatus(taskId, targetStatus);
    selectedTasks = [];
}

// Get the corresponding task list element based on status
function getListElement(status) {
    if (status === 'todo') {
        return todoList;
    } else if (status === 'inProgress') {
        return inProgressList;
    } else if (status === 'closed') {
        return closedList;
    }
}

// Show the add task popup
function showPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Close the add task popup
function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

// Load tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        taskList = JSON.parse(savedTasks);
    }
}

// Attach event listeners
taskForm.addEventListener('submit', addTask);
addTaskBtn.addEventListener('click', showPopup);
cancelBtn.addEventListener('click', closePopup);

// Load tasks from local storage
loadTasks();

// Populate tasks on initial load
populateTasks();
