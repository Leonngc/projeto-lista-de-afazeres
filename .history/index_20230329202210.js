const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');



addTask.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    newLi.innerText = `${task.value}`
    ul.appendChild(newLi)
    createButtonRemove()
})

function createButtonRemove(){
    let btnRemove = document.createElement('i')
    btnRemove.className = '<i class="fi fi-rs-circle-cross"></i>'
}

function deleteTask(){
  
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})
