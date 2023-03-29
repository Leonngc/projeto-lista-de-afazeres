const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    let newli = document.createElement('li')
    newli.classList = 'newtask'
    newli.innerText = `${task.value}`
    ul.appendChild(newli)
    task.value = ''
})


function deleteTask(){
    const removeBtn = document.querySelector('#removeBtn')
    re
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

