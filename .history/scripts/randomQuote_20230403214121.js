let randomBtn = document.querySelector('#frase-button');

randomBtn.addEventListener('click', ()=>{
    let frases = [
        'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado - Roberto Shinyashiki',

        'Não importa que você vá devagar, contanto que você não pare - Confúcio',

        'Coragem é saber o que não temer - Platão',

        'Acredite em milagres, mas não dependa deles - Immanuel Kant',

        'A vida é 10% o que acontece a você e 90% como você reage a isso - Charles Swindoll',

        'A felicidade não é algo pronto. Ela é feita das suas próprias ações - Dalai Lama', 

        'A felicidade não é algo pronto. Ela é feita das suas próprias ações - Dalai Lama',

        'Cada segundo é tempo para mudar tudo para sempre - Charles Chaplin',

        'Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer - Margaret Thatcher',

        'A paz vem de dentro de você mesmo. Não a procure à sua volta - Buda', 

        ''
    ]

    let i = Math.floor(8 * Math.random())
    alert(`${frases[i]}`)
    
})
