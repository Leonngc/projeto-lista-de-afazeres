const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');

addTask.addEventListener('click', () =>{
    res.innerHTML += `<li>${task}<`
})
