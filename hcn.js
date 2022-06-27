let rect = new RectangleOne(100,400,100,50);
rect.drawRect();
function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function play() {
    clearCanvas();
    rect.drawRect();

}

setInterval(play, 50)

window.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
            case 37:
                rect.moveLeft();
                break;
            case 39:
                rect.moveRight();
                break;
        }
    }
)
