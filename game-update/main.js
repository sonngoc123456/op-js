let motor = new Motor(400,550,50,30);
motor.draw();

let bars = [];
function creatBar() {
    let barrier = new Barrier(Math.floor(Math.random() * (420-120)) + 120,0,50,30);
        bars.push(barrier);
}
setInterval(creatBar,1500)
let lines = [];
function creatLines() {
    let line = new Barrier(289,10,50,30);
    lines.push(line);
}
setInterval(creatLines,700)
let trees = [];
function creatTrees() {
    let tree = new Barrier(0,10,50,30);
    let tree1 = new Barrier(560,10,50,30);
    trees.push(tree,tree1);
}
setInterval(creatTrees,900);


function clearCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 700);
}
function play() {
    clearCanvas();
    moveDown2();
    moveDown3();
    moveDown1();
    motor.draw();
    motor.collision(intervalId);

}
let intervalId = setInterval(play,60);
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


