const task = document.querySelector('#taskInput'); 
const addTask = document.querySelector('#buttonAdd'); 
const removeAll = document.querySelector('#removeAll');
const res = document.querySelector('#res');
const ul = document.querySelector('ul');

addTask.addEventListener('click', () =>{
    if(task.value.length > 0)
    let newLi = document.createElement('li');
    let btnRemove = document.createElement('i')
    let editBtn = document.createElement('i')
    let span = document.createElement('span')
    let editInput = document.createElement('input')
    let confirmTask = document.createElement('i')
    span.innerText = `${task.value}`
    ul.appendChild(newLi)
    task.value = ''

    btnRemove.className = 'fi fi-rs-circle-cross'
    editBtn.className = "fi fi-sr-pencil"
    confirmTask.className = "fi fi-br-check"
    
    newLi.appendChild(span)
    newLi.appendChild(btnRemove)
    newLi.appendChild(editBtn)
    newLi.appendChild(confirmTask)

    btnRemove.addEventListener('click', ()=>{
        btnRemove.parentElement.style.display = 'none'
    })
 
    editBtn.addEventListener('click', ()=>{ 
        span.replaceWith(editInput)
        editInput.setAttribute('type', 'text')
        editInput.setAttribute('placeholder', 'Altere sua tarefa')
        document.addEventListener('keyup', (event)=>{
            if(event.key === 'Enter'){
            let newSpan = document.createElement('span')
            span.innerText = `${editInput.value}`
            editInput.replaceWith(span)
            }
        })
    })

    confirmTask.addEventListener('click', ()=>{
        span.classList.toggle('checked')
    })
})

removeAll.addEventListener('click', ()=>{
    ul.innerText =''
})

