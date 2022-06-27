let motor = new Motor(400,550,80,190);
motor.draw();
let barrier = new Barrier(350,10,50,30);
barrier.draw1();
let barrier1 = new Barrier(150,50,50,30);
barrier1.draw1();

function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 700);
}
function play() {
    clearCanvas();
    barrier.draw1();
    barrier1.draw1();
    barrier.moveDown();
    barrier1.moveDown();
    motor.draw();
    motor.collision(barrier, intervalId);

}
let intervalId = setInterval(play,80);
window.addEventListener("keydown", function (event){
    switch (event.keyCode) {
        case 37:
            motor.moveLeft();
            break;
        case 39 :
            motor.moveRight();
            break;
        case 38 :
            motor.moveTop();
            break;
        case 40:
            motor.moveDown();
            break;
    }
}
)


