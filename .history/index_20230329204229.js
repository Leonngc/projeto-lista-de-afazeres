const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    newLi.innerText = `${task.value}`
    ul.appendChild(newLi)
    task.value = ''
    removeTask(newLi);
})


function removeTask(li){
  let btnRemove = document.createElement('i')
  btnRemove.className = 'fi fi-rs-circle-cross'
  btnRemove.addEventListener('click', ()=>{
  btnRemove.parentElement.style.display = 'none'
  })
}

document.querySelectorAll('li').forEach(removeTask);


removeAll.addEventListener('click', ()=>{
    ul.remove
})

