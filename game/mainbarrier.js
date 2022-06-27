class Barrier {
    constructor(x,y,width,height,speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw1() {
            this.ctx.beginPath();
            const image = new Image(this.width,this.height);
            image.src = 'image2.png';
            this.ctx.drawImage(image, this.x, this.y);
            this.ctx.closePath();
    }
    moveDown() {
        if(this.y < this.canvas.width) {
            this.y += 15;
        }else {
            this.y= Math.floor(Math.random()*350);
            this.x= Math.floor(Math.random()*350);
        }
    }
    }




