const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');
const removeBtn = document.querySelector('#removeBtn');

addTask.addEventListener('click', () =>{
    let newli = document.createElement('li')
    newli.innerHTML = `<li>${task.value}
    <button class="editButton" id="removeBtn" onclick="deleteTask()"><i class="fi fi-br-cross"></i></button> 
    <button class="editButton" onclick="editTask()"><i class="fi fi-sr-pencil"></i></button> 
    <button class="editButton" onclick="checkTask()"><i class="fi fi-br-check"></i> </button> </li>`

    ul.appendChild(newli)
})


function deleteTask(){
    let removeBtn = document.querySelector('#removeBtn');
    console.log(removeBtn.parentElement)
}


removeAll.addEventListener('click', ()=>{
    res.innerHTML = " "
})

