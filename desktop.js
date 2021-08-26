setTime()
winSoundWelcome()

function setTime(){
    const currentdate = new Date();
    if(currentdate.getHours().toString().length === 1) {
        hour = '0'+hour;
    }
    if(currentdate.getMinutes().toString().length === 1) {
        minute = '0'+minute;
    }

    const time = currentdate.getDate() + "/" + + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() +'  '+currentdate.getHours()+ ":" + currentdate.getMinutes() ;

    const hora = document.getElementById("hora");
    hora.innerHTML = time;

    setTimeout(setTime, 30000);
}
function winSoundWelcome() {
    const audio = new Audio('src/welcome.mp3');
    audio.play().then();
}

