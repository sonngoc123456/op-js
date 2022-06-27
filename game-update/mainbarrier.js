class Barrier {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw1() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image2.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    draw2() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image4.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    draw3() {
        this.ctx.beginPath();
        const image = new Image(this.width, this.height);
        image.src = 'image5.png';
        this.ctx.drawImage(image, this.x, this.y);
        this.ctx.closePath();
    }
    moveDown() {
        this.y += 15;
    }
}
function moveDown1() {
    for(let i=0;i<bars.length;i++) {
        bars[i].moveDown();
        bars[i].draw1();
    }
}
function moveDown2() {
    for(let i=0;i<lines.length;i++) {
        lines[i].moveDown();
        lines[i].draw2();
    }
}
function moveDown3() {
    for(let i=0;i<trees.length;i++) {
        trees[i].moveDown();
        trees[i].draw3();
    }
}


