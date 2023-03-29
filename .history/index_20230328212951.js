const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    let newli = document.createElement('li')

    newli.innerHTML = `<li>${task.value}
    <button class="editButton" id="removeBtn" onclick="deleteTask()"><i class="fi fi-br-cross"></i></button> 
    <button class="editButton" onclick="editTask()"><i class="fi fi-sr-pencil"></i></button> 
    <button class="editButton" onclick="checkTask()"><i class="fi fi-br-check"></i> </button> </li>`
    ul.appendChild(newli)
    task.value = ''
})


function deleteTask(){
    const removeV = document.querySelector('#removeBtn')
    remoV
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

