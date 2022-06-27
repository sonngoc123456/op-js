let motor = new Motor(400,500,80,160);
motor.draw();
var barrier = new Barrier(0,0,50,50);
barrier.draw1();
function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 700);
}
function play() {
    //console.log("bd choi")
    clearCanvas()
    barrier.moveDown()
    barrier.draw1()
    //createBarrier();
    motor.draw();
    //move();
   requestAnimationFrame(play)

}
play();
//setInterval(move,50);
// function createBarrier(){
//     barrier.clearCanvas();
//     barrier = new Barrier(0,0,50,50);
//     barrier.draw1();
//     motor.draw();
//}
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
})
// function move() {
//     if(barrier.y > 690) {
//         console.log("check clear")
//         createBarrier();
//     }else {
//         barrier.moveDown();
//     }
//}
