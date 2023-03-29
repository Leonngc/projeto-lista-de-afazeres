const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');
const removeBtn = document.querySelector('#removeBtn')
addTask.addEventListener('click', () =>{
    let newli = document.createElement('li')
    newli.innerText = `${task.value}`
    new
    ul.appendChild(newli)
    task.value = ''
})


function deleteTask(){
    removeBtn.parentElement.style.display = 'none'
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

