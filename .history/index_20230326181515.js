const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul')

addTask.addEventListener('click', () =>{
    let newli = document.createElement('li')
    newli.innerText = ``
    ul.appendChild(newLi)
  

    
})


removeAll.addEventListener('click', ()=>{
    res.innerHTML = " "
})

function deleteTask(){
    
}