const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    let btnRemove = document.createElement('i')
    let editBtn = document.createElement('i')
    let editConfirm = document.createElement('i')
    let span = document.createElement('span')

    let editInput = document.createElement('input')
    span.innerText = `${task.value}`
    ul.appendChild(newLi)
    task.value = ''

    btnRemove.className = 'fi fi-rs-circle-cross'
    editBtn.className = "fi fi-sr-pencil"
    newLi.appendChild(span)
    newLi.appendChild(btnRemove)
    newLi.appendChild(editBtn)

    btnRemove.addEventListener('click', ()=>{
        btnRemove.parentElement.style.display = 'none'
    })
 
    editBtn.addEventListener('click', ()=>{ 
        newLi.replaceChild(editInput, span)
        editInput.setAttribute('type', 'text')
        editInput.setAttribute('placeholder', 'Altere sua tarefa')
        editConfirm.className = "fi fi-br-check"
        newLi.appendChild(editConfirm)

        editConfirm.addEventListener('click', ()=>{
            let newTask = editInput.value
            newLi.replaceChild()
        })
    })
})

removeAll.addEventListener('click', ()=>{
    ul.innerText =''
})

