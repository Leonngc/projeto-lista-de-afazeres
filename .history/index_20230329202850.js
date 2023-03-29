const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');
let btnRemove = document.createElement('i')
addTask.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    newLi.innerText = `${task.value}`
    ul.appendChild(newLi)
    
    btnRemove.className = 'fi fi-rs-circle-cross'
    newLi.appendChild(btnRemove)
    task.value = ''

})

btnRemove.addEventListener('click', ())


function deleteTask(){
  
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

