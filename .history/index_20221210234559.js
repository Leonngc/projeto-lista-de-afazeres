addEventListener("load", function(){
    let key = document.getElementById("task-input");
    let save = document.getElementById("buttonAdd");
    let clear = document.getElementById("removeAll");
    let res = document.getElementById("res");


    save.addEventListener("click", function(){
        let task = key.value;
        localStorage.setItem(task);
            exibir();
    })

    clear.addEventListener()
})