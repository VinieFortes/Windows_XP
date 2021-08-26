const user = document.getElementById("adm");
const invalido = document.getElementById("invalido");
const off = document.getElementById("off");

async function winSound() {
    const audio = new Audio('src/error.mp3');
    await audio.play();
}
function gotoDesktop(){
    window.location.href = 'desktop.html';
}
