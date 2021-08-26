setTime()
winSoundWelcome()

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

    setTimeout(setTime, 30000);
}
function winSoundWelcome() {
    const audio = new Audio('src/welcome.mp3');
    audio.play().then();
}

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


