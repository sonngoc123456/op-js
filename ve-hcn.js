let drawRectangle = function (height,width) {
    this.height = height;
    this.width = width;
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.setWidth = function (width) {
        this.width = width;
    }
    this.setHeight = function (height) {
        this.height = height;
    }
    this.getArena = function () {
        return this.width * this.height;
    }
    this.getParameter = function () {
        return (this.width + this.height)*2;
    }
}
let mydrawRectangle = new drawRectangle(350,50);
let width = mydrawRectangle.getWidth();
let height = mydrawRectangle.getHeight();
/*
let arena = mydrawRectangle.getArena();
document.write('dien tich là : ' + arena + '<br>');
let parameter = mydrawRectangle.getParameter();
document.write('chu vi la : ' + parameter);
 */
function drawRect() {
    let canvas = document.getElementById('myCanvas')
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(200, 450, height, width);
    ctx.fill();
}
drawRect();
