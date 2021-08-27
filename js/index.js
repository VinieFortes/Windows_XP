const user = document.getElementById("adm");
const invalido = document.getElementById("invalido");
const off = document.getElementById("off");

//Função responsavel em reproduzir som de erro do Win
async function winSound() {
    const audio = new Audio('src/error.mp3');
    await audio.play();
}
//Função responsavel em direcionar para outro .html
function gotoDesktop(){
    window.location.href = 'desktop.html';
}
