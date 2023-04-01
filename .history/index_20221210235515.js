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

    clear.addEventListener("click", function(){
        localStorage.clear();
            exibir();;
    })

    addEventListener("storage", function(event){
        let chave = event.key;
        let newValue = event.newValue;
        let oldValue = event.oldValue;
        let storageArea = event.storageArea;

        chave.innerHTML(chave+ "\n" +newValue + "\n" +oldValue + "\n" + storageArea);
        exibir();

    })

    function exibir(){
        let str = "";
        for(let i = 0,)
    }
})