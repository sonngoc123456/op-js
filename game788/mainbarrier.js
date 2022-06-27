class Barrier {
    constructor(x, y, width, height, speed) {
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
    moveDown() {
        this.y += 15;
    }
}
function moveDown1() {
    let score = 0;
    for(let i=0;i<bar.length;i++) {
        bar[i].moveDown();
        bar[i].draw1();
        score +=1;
    }
    this.x = Math.floor(Math.random()*300);
}
document.getElementById('score').innerHTML = score;



