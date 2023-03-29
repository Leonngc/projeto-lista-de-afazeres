const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    let newli = document.createElement('li')
    let newButton = document.createElement('button')
    let removeBtn = document.createElement('i')
    newButton.appendChild()
    removeBtn.className = "fi fi-br-cross"
    newli.appendChild(removeBtn)
    newli.innerText = `${task.value}`  
    /*`<li>${task.value}
    <button class="editButton" id="removeBtn" onclick="deleteTask()"><i class="fi fi-br-cross"></i></button> 
    <button class="editButton" onclick="editTask()"><i class="fi fi-sr-pencil"></i></button> 
    <button class="editButton" onclick="checkTask()"><i class="fi fi-br-check"></i> </button> </li>`*/
    ul.appendChild(newli)
    task.value = ''
})


function deleteTask(){
    
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

