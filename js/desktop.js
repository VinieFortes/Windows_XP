setTime()
winSoundWelcome()

// Função responsavel por getTime da maquina e mostrar no elemento
function setTime(){
    const currentdate = new Date();
    let time;
    if(currentdate.getHours().toString().length === 1 && currentdate.getMinutes().toString().length === 1) {
        time = currentdate.getDate() + "/" + + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() +'  '+'0'+currentdate.getHours()+ ":" +'0'+ currentdate.getMinutes() ;
    }
    else if (currentdate.getHours().toString().length === 1){
        time = currentdate.getDate() + "/" + + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() +'  '+'0'+currentdate.getHours()+ ":" + currentdate.getMinutes() ;
    }
    else if(currentdate.getMinutes().toString().length === 1) {
        time = currentdate.getDate() + "/" + + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() +'  '+currentdate.getHours()+ ":" + '0'+currentdate.getMinutes() ;
    }
    else{
        time = currentdate.getDate() + "/" + + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() +'  '+currentdate.getHours()+ ":" + currentdate.getMinutes() ;
    }

    const hora = document.getElementById("hora");
    hora.innerHTML = time;

    setTimeout(setTime, 10000);
}

//Função responsavel em reproduzir som de Boas-vindas do XP
function winSoundWelcome() {
    const audio = new Audio('src/welcome.mp3');
    audio.play().then();
}

//Função responsavel em criar a DIV com diversos elementos que representa a janela do Windows
function meuPC(){
    const div = document.createElement('div');
    div.className = 'meuPC'
    div.id = 'teste'
    const barra = document.createElement('div');
    barra.className = 'barra';
    const p = document.createElement('p');
    p.innerHTML = 'Meu computador'
    const close = document.createElement('img');
    close.src = 'src/close.png'
    close.width = 24
    close.onclick = function close(){const div = document.getElementById('teste'); div.remove();}
    const corpo = document.createElement('div');
    corpo.className = 'corpo'
    const xplogo = document.createElement('img');
    xplogo.src = 'src/windows.png'
    xplogo.width = 150; xplogo.height = 150
    const texto = document.createElement('p');
    texto.innerHTML = "Sistema:<br><br>Windows XP<br>JavaScript Edition<br>Versão 2021"

    // codigo para mover as Div's com o mouse (não é meu no caso) ps valeu cara aleatorio do StackOverFlow
    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);

    div.appendChild(barra)
    barra.appendChild(p)
    barra.appendChild(close)
    div.appendChild(corpo)
    corpo.appendChild(xplogo)
    corpo.appendChild(texto)
    document.getElementsByTagName('body')[0].appendChild(div);
}

//Função responsavel em criar a DIV com diversos elementos que representa a janela do Windows
function lixeira(){
    const div = document.createElement('div');
    div.className = 'meuPC'
    div.id = 'teste'
    const barra = document.createElement('div');
    barra.className = 'barra';
    const p = document.createElement('p');
    p.innerHTML = 'Lixeira'
    const close = document.createElement('img');
    close.src = 'src/close.png'
    close.width = 24
    close.onclick = function close(){const div = document.getElementById('teste'); div.remove();}
    const corpo = document.createElement('div');
    corpo.className = 'corpo_lixo'
    const texto = document.createElement('p');
    texto.innerHTML = "A lixeira está vazia"

    // codigo para mover as Div's com o mouse (não é meu no caso) ps valeu cara aleatorio do StackOverFlow
    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);

    div.appendChild(barra)
    barra.appendChild(p)
    barra.appendChild(close)
    div.appendChild(corpo)
    corpo.appendChild(texto)
    document.getElementsByTagName('body')[0].appendChild(div);
}

//Função responsavel em criar a DIV com diversos elementos que representa a janela do Windows
function arquivos(){
    const div = document.createElement('div');
    div.className = 'meuPC'
    div.id = 'teste'
    const barra = document.createElement('div');
    barra.className = 'barra';
    const p = document.createElement('p');
    p.innerHTML = 'Meus Documentos'
    const close = document.createElement('img');
    close.src = 'src/close.png'
    close.width = 24
    close.onclick = function close(){const div = document.getElementById('teste'); div.remove();}
    const corpo = document.createElement('div');
    corpo.className = 'corpo_arquivo'

    const div_pasta = document.createElement('div');
    div_pasta.className = 'div_pasta'
    const pasta_img = document.createElement('img');
    pasta_img.src = 'src/pasta.png'
    const pasta_p = document.createElement('p');
    pasta_p.innerHTML = 'Musicas'

    const div_pasta2 = document.createElement('div');
    div_pasta2.className = 'div_pasta'
    const pasta_img2 = document.createElement('img');
    pasta_img2.src = 'src/pasta.png'
    const pasta_p2 = document.createElement('p');
    pasta_p2.innerHTML = 'Fotos'

    const div_pasta3 = document.createElement('div');
    div_pasta3.className = 'div_pasta'
    const pasta_img3 = document.createElement('img');
    pasta_img3.src = 'src/pasta.png'
    const pasta_p3 = document.createElement('p');
    pasta_p3.innerHTML = 'Documentos'

    const div_pasta4 = document.createElement('div');
    div_pasta4.className = 'div_pasta'
    const pasta_img4 = document.createElement('img');
    pasta_img4.src = 'src/pasta.png'
    const pasta_p4 = document.createElement('p');
    pasta_p4.innerHTML = 'Jogos'

    const div_pasta5 = document.createElement('div');
    div_pasta5.className = 'div_pasta'
    const pasta_img5 = document.createElement('img');
    pasta_img5.src = 'src/pasta.png'
    const pasta_p5 = document.createElement('p');
    pasta_p5.innerHTML = 'Downloads'


    // codigo para mover as Div's com o mouse (não é meu no caso) ps valeu cara aleatorio do StackOverFlow
    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);

    div.appendChild(barra)
    barra.appendChild(p)
    barra.appendChild(close)
    div.appendChild(corpo)

    div_pasta.appendChild(pasta_img)
    div_pasta.appendChild(pasta_p)
    corpo.appendChild(div_pasta)

    div_pasta2.appendChild(pasta_img2)
    div_pasta2.appendChild(pasta_p2)
    corpo.appendChild(div_pasta2)

    div_pasta3.appendChild(pasta_img3)
    div_pasta3.appendChild(pasta_p3)
    corpo.appendChild(div_pasta3)

    div_pasta4.appendChild(pasta_img4)
    div_pasta4.appendChild(pasta_p4)
    corpo.appendChild(div_pasta4)

    div_pasta5.appendChild(pasta_img5)
    div_pasta5.appendChild(pasta_p5)
    corpo.appendChild(div_pasta5)

    document.getElementsByTagName('body')[0].appendChild(div);
}

//Função responsavel em chamar o .html da TelaAzul
function telaAzul(){
    window.location.href = 'telaAzul.html';
}

let count;

//Função responsavel para criar o menu Inciar
function menu(){
    if(count === 0 || count === undefined){
        const div = document.createElement('div');
        div.className = 'menu'
        div.id = 'teste'
        const barra = document.createElement('div');
        barra.className = 'barra_menu';
        const p = document.createElement('p');
        p.innerHTML = 'Administrador'
        const perfil = document.createElement('img');
        perfil.src = 'src/dog.jpg'
        perfil.width = 55; perfil.height = 55;
        const corpo = document.createElement('div');
        corpo.className = 'corpo_menu'

        //Tabela 1 representa os Apps que estão a Esquerda
        const tabela1 = document.createElement('div');
        tabela1.className = 'tabela01'

        //Todos App 'X' tab1 representa uma div com img e p de cada App da tabela 1
        const app1tab1 = document.createElement('div');
        app1tab1.className = 'apptab1'
        const img01_tab1 = document.createElement('img');
        img01_tab1.src = 'src/explorer.png'
        img01_tab1.width = 32; img01_tab1.height = 32;
        const p01_tab1 = document.createElement('p');
        p01_tab1.innerHTML = 'Internet Explorer'

        const app2tab1 = document.createElement('div');
        app2tab1.className = 'apptab1'
        const img02_tab1 = document.createElement('img');
        img02_tab1.src = 'src/email.png'
        img02_tab1.width = 32; img01_tab1.height = 32;
        const p02_tab1 = document.createElement('p');
        p02_tab1.innerHTML = 'Email'

        const app3tab1 = document.createElement('div');
        app3tab1.className = 'apptab1'
        const img03_tab1 = document.createElement('img');
        img03_tab1.src = 'src/media.png'
        img03_tab1.width = 32; img01_tab1.height = 32;
        const p03_tab1 = document.createElement('p');
        p03_tab1.innerHTML = 'Windows Media Player'

        const app4tab1 = document.createElement('div');
        app4tab1.className = 'apptab1'
        const img04_tab1 = document.createElement('img');
        img04_tab1.src = 'src/firefox.png'
        img04_tab1.width = 32; img01_tab1.height = 32;
        const p04_tab1 = document.createElement('p');
        p04_tab1.innerHTML = 'Mozilla Firefox'

        const app5tab1 = document.createElement('div');
        app5tab1.className = 'apptab1'
        const img05_tab1 = document.createElement('img');
        img05_tab1.src = 'src/live.png'
        img05_tab1.width = 32; img01_tab1.height = 32;
        const p05_tab1 = document.createElement('p');
        p05_tab1.innerHTML = 'Windows Messenger'

        const app6tab1 = document.createElement('div');
        app6tab1.className = 'apptab1'
        const img06_tab1 = document.createElement('img');
        img06_tab1.src = 'src/wordpad.png'
        img06_tab1.width = 32; img01_tab1.height = 32;
        const p06_tab1 = document.createElement('p');
        p06_tab1.innerHTML = 'WordPad'

        const app7tab1 = document.createElement('div');
        app7tab1.className = 'apptab1'
        const img07_tab1 = document.createElement('img');
        img07_tab1.src = 'src/paint.png'
        img07_tab1.width = 32; img01_tab1.height = 32;
        const p07_tab1 = document.createElement('p');
        p07_tab1.innerHTML = 'Paint'

        //Responsavel em criar uma div com p e outra div que é triangulo verde
        const todosApps = document.createElement('div');
        todosApps.className = 'todos'
        const vertodos = document.createElement('p');
        vertodos.innerHTML = 'Todos os Programas'
        const triangulo = document.createElement('div');
        triangulo.className = 'triangulo'



        //Tabela 02 representa os Apps da Direita
        const tabela2 = document.createElement('div');
        tabela2.className = 'tabela02'

        //Todos App 'X' tab2 representa uma div com img e p de cada App da tabela 2
        const app1tab2 = document.createElement('div');
        app1tab2.className = 'apptab1'
        const img01_tab2 = document.createElement('img');
        img01_tab2.src = 'src/pasta.png'
        img01_tab2.width = 32; img01_tab1.height = 32;
        const p01_tab2 = document.createElement('p');
        p01_tab2.innerHTML = 'Meus Documentos'

        const app2tab2 = document.createElement('div');
        app2tab2.className = 'apptab1'
        const img02_tab2 = document.createElement('img');
        img02_tab2.src = 'src/pasta.png'
        img02_tab2.width = 32; img01_tab1.height = 32;
        const p02_tab2 = document.createElement('p');
        p02_tab2.innerHTML = 'Minhas Imagens'

        const app3tab2 = document.createElement('div');
        app3tab2.className = 'apptab1'
        const img03_tab2 = document.createElement('img');
        img03_tab2.src = 'src/pasta.png'
        img03_tab2.width = 32; img01_tab1.height = 32;
        const p03_tab2 = document.createElement('p');
        p03_tab2.innerHTML = 'Minhas Musicas'

        const app4tab2 = document.createElement('div');
        app4tab2.className = 'apptab1'
        const img04_tab2 = document.createElement('img');
        img04_tab2.src = 'src/computer.png'
        img04_tab2.width = 32; img01_tab1.height = 32;
        const p04_tab2 = document.createElement('p');
        p04_tab2.innerHTML = 'Meu Computador'

        const app5tab2 = document.createElement('div');
        app5tab2.className = 'apptab1'
        const img05_tab2 = document.createElement('img');
        img05_tab2.src = 'src/panel.png'
        img05_tab2.width = 32; img01_tab1.height = 32;
        const p05_tab2 = document.createElement('p');
        p05_tab2.innerHTML = 'Painel de Controle'

        const app6tab2 = document.createElement('div');
        app6tab2.className = 'apptab1'
        const img06_tab2 = document.createElement('img');
        img06_tab2.src = 'src/rede.png'
        img06_tab2.width = 32; img01_tab1.height = 32;
        const p06_tab2 = document.createElement('p');
        p06_tab2.innerHTML = 'Redes'

        const lastDiv = document.createElement('div');
        lastDiv.className = 'last'
        const logout = document.createElement('img');
        logout.src = 'src/logout.jpg'
        logout.width = 24; logout.height = 24;
        const dolog = document.createElement('p');
        dolog.innerHTML = 'Fazer logoff'
        const logoff = document.createElement('img');
        logoff.src = 'src/off.png'
        logoff.width = 24; logoff.height = 24;
        const doloff = document.createElement('p');
        doloff.innerHTML = 'Desligar o computador'

        //Responsavel por organizaçar de forma hierarquia os elementos no HTML
        div.appendChild(barra)
        barra.appendChild(perfil)
        barra.appendChild(p)
        div.appendChild(corpo)
        corpo.appendChild(tabela1)
        corpo.appendChild(tabela2)
        div.appendChild(lastDiv)

        lastDiv.appendChild(logout)
        lastDiv.appendChild(dolog)
        lastDiv.appendChild(logoff)
        lastDiv.appendChild(doloff)

        tabela1.appendChild(app1tab1)
        tabela1.appendChild(app2tab1)
        tabela1.appendChild(app3tab1)
        tabela1.appendChild(app4tab1)
        tabela1.appendChild(app5tab1)
        tabela1.appendChild(app6tab1)
        tabela1.appendChild(app7tab1)
        tabela1.appendChild(todosApps)


        app1tab1.appendChild(img01_tab1)
        app1tab1.appendChild(p01_tab1)

        app2tab1.appendChild(img02_tab1)
        app2tab1.appendChild(p02_tab1)

        app3tab1.appendChild(img03_tab1)
        app3tab1.appendChild(p03_tab1)

        app4tab1.appendChild(img04_tab1)
        app4tab1.appendChild(p04_tab1)

        app5tab1.appendChild(img05_tab1)
        app5tab1.appendChild(p05_tab1)

        app6tab1.appendChild(img06_tab1)
        app6tab1.appendChild(p06_tab1)

        app7tab1.appendChild(img07_tab1)
        app7tab1.appendChild(p07_tab1)

        todosApps.appendChild(vertodos)
        todosApps.appendChild(triangulo)

        tabela2.appendChild(app1tab2)
        tabela2.appendChild(app2tab2)
        tabela2.appendChild(app3tab2)
        tabela2.appendChild(app4tab2)
        tabela2.appendChild(app5tab2)
        tabela2.appendChild(app6tab2)

        app1tab2.appendChild(img01_tab2)
        app1tab2.appendChild(p01_tab2)

        app2tab2.appendChild(img02_tab2)
        app2tab2.appendChild(p02_tab2)

        app3tab2.appendChild(img03_tab2)
        app3tab2.appendChild(p03_tab2)

        app4tab2.appendChild(img04_tab2)
        app4tab2.appendChild(p04_tab2)

        app5tab2.appendChild(img05_tab2)
        app5tab2.appendChild(p05_tab2)

        app6tab2.appendChild(img06_tab2)
        app6tab2.appendChild(p06_tab2)


        document.getElementsByTagName('body')[0].appendChild(div);
        count = 1;
    } else if(count === 1){
        count = 0;
        remove()
    }
    //Função que remove div, usada apaenas para o menu Inciar
    function remove() {
        const elem = document.getElementById('teste');
        elem.remove()
        return false;
    }
}

