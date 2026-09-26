document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const taskInput = document.querySelector('#task');
    const tasksList = document.querySelector('.tasks');

    form.onsubmit = () => {
        const task = taskInput.value.trim();

        if (task.length > 0) {
            const li = document.createElement('li');
            const checkbox =document.createElement('input');
            checkbox.type='checkbox';

            const span =document.createElement('span');
            span.textContent=task;
            checkbox.onchange = () => {
              if(checkbox.checked){
              span.style.textDecoration='line-through';
              span.style.opacity='0.6';
            }else{
              span.style.textDecoration='none';
              span.style.opacity='1';
            }
            };
            li.append(checkbox,span);
            tasksList.append(li);
            taskInput.value = '';
        }

        return false;
    };
});