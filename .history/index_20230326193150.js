const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');
const removeBtn = document.querySelector('#removeBtn');let newli = document.createElement('li')

addTask.addEventListener('click', () =>{
    let li = document.createElement('li')
    let btnremove = document.createElement('button')
    let iconRemove = document.createElement('i')
    iconRemove.className = "fi fi-br-cross"  
    ul.appendChild(li)
    li.appendChild(btnremove)
    btnremove.appendChild(iconRemove)

    console.log(li)
    /*newli.innerHTML += `<li>${task.value}
    <button class="editButton" id="removeBtn" onclick="deleteTask()"><i class="fi fi-br-cross"></i></button> 
    <button class="editButton" onclick="editTask()"><i class="fi fi-sr-pencil"></i></button> 
    <button class="editButton" onclick="checkTask()"><i class="fi fi-br-check"></i> </button> </li>`
*/
   // ul.appendChild(newli)
})


function deleteTask(){
    let removeBtn = document.querySelector('#removeBtn');
    console.log(removeBtn.parentElement)
}


removeAll.addEventListener('click', ()=>{
    res.innerHTML = " "
})

