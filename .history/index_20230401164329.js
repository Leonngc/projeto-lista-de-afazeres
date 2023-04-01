const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    let btnRemove = document.createElement('i')
    let editBtn = document.createElement('i')
    newLi.innerText = `${task.value}`
    ul.appendChild(newLi)
    task.value = ''

    btnRemove.className = 'fi fi-rs-circle-cross'
    editBtn.className = "fi fi-sr-pencil"

    newLi.appendChild(btnRemove)
    newLi.appendChild(editBtn)

    btnRemove.addEventListener('click', ()=>{
        btnRemove.parentElement.style.display = 'none'
    })
 
})

removeAll.addEventListener('click', ()=>{
    ul.innerText =''
})

