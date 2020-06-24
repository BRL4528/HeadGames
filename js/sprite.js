function Sprite(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }

}
var bg = new Sprite(-1, 30, 620, 620),
spriteBoneco = new Sprite(685, 10, 100, 140)