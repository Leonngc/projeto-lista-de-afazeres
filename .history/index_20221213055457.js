addEventListener("load", function(){
    let key = document.getElementById("task-input");
    let save = document.getElementById("buttonAdd");
    let limpar = document.getElementById("remove-all");
    let res = document.getElementById("res");


    save.addEventListener("click", function(){
        let task = key.value;
        localStorage.setItem(task, 'tarefa');
            exibir();
    })

    limpar.addEventListener("click", function(){
        localStorage.clear();
            exibir();
    })

    addEventListener("storage", function(event){
        let chave = event.key;
        let newValue = event.newValue;
        let oldValue = event.oldValue;
        let storageArea = event.storageArea;

        chave.innerHTML(chave+ "\n" +oldValue + "\n" +newValue + "\n" + storageArea);
        exibir();

    })

   function exibir(){
    const i
    for(i = 0; i < localStorage.length)
   }

    
    exibir()
})

