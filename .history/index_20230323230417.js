const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');



addTask.addEventListener('click', () =>{
    
    res.innerHTML += `<li class="liTask">${task.value}
    <button class="editButton" onclick="deleteTask()"><i class="fi fi-br-cross"></i></button> 
    <button class="editButton" onclick="editTask()"><i class="fi fi-sr-pencil"></i></button> 
    <button class="editButton" onclick="checkTask()"><i class="fi fi-br-check"></i> </button> </li>`
})

removeAll.addEventListener('click', ()=>{
    res.innerHTML = " "
})

function deleteTask(){
    let liTask = document.getElementsByClassName('liTask')
    liTask.appendChild(spaa)
    liTask.parent.style.display = "none"
}
