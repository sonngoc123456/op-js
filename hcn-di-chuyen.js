class RectangleOne {
    constructor (x,y,height,width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.canvas = document.getElementById('myCanvas')
        this.ctx = this.canvas.getContext('2d');
    }
    drawRect() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.height, this.width);
        this.ctx.fill();
    }
    moveLeft() {
        this.x -= 10;
    }

    moveRight() {
        this.x += 10;
    }
}

