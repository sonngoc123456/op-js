class Motor {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        this.ctx.beginPath();
        let image = new Image(this.width, this.height);
        image.src = 'image.png';
        this.ctx.drawImage(image, this.x, this.y)
        this.ctx.closePath()
}
    moveLeft() {
        this.x -= 20;
}
    moveRight() {
        this.x += 20;
}
    moveTop() {
        this.y -= 20;
}
    moveDown() {
        this.y += 20
}

}
