const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');



addTask.addEventListener('click', () =>{
    let newremoveBtn = document.createElement('button')
    let newi = document.createElement('i')
    button.className = "removeBtn"
    newi.className = "fi fi-br-cross"
    let newli = document.createElement('li')
    newli.innerText = `${task.value}`
    newli.appendChild(removeBtn)
    ul.appendChild(newli)
    task.value = ''
})


function deleteTask(){
    const
    removeBtn.parentElement.style.display = 'none'
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

