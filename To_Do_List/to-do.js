const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  if (!input.value.trim()) return;

  // 1. Create list item
  const li = document.createElement('li');

  // 2. Create task text span
  const textSpan = document.createElement('span');
  textSpan.textContent = input.value;
  textSpan.addEventListener('click', () => {
    textSpan.classList.toggle('completed');
  });

  // 3. Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // 4. Assemble DOM elements
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = ''; // Clear input
});