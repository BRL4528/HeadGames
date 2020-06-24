// variaveis de jogo

var canvas, ctx, ALTURA, LARGURA, frames = 0;

function clique (event){
    alert("cliclou")
}
function main(){
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >= 500){
        LARGURA = 600;
        ALTURA = 600;
    }
    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "5px solid #f1f1f1";
     
    ctx = canvas.getContext("2d")
    document.body.appendChild(canvas)
    document.addEventListener("mousedown", clique)
}
function roda(){}
function atualiza(){}
function desenha(){} 