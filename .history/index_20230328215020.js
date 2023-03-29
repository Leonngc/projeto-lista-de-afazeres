const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');
const removeBtn = document.createElement('.removeBtn')


addTask.addEventListener('click', () =>{
    let newi = document.createElement('i')
    newi.className = "fi fi-br-cross"
    let newli = document.createElement('li')
    newli.innerText = `${task.value}`
    newli.appendChild(removeBtn)
    ul.appendChild(newli)
    task.value = ''
})


function deleteTask(){
    removeBtn.parentElement.style.display = 'none'
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

