const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');


addTask.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    const btnRemove = document.createElement('i')
    newLi.innerText = `${task.value}`
    ul.appendChild(newLi)
    btnRemove.className = 'fi fi-rs-circle-cross'
    newLi.appendChild(btnRemove)
    task.value = ''
    removeTask();
})




function removeTask(){
  bt
}


removeAll.addEventListener('click', ()=>{
    ul.remove
})

