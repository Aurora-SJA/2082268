var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;
var canvas;

function init(monTest) {
    canvas = document.getElementById(monTest);
    ctx = canvas.getContext('2d');
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    return setInterval(draw, 10);
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
    clear();
    circle(x, y, 10);
    if (x + dx > WIDTH || x + dx < 0)
        dx = -dx;
    if (y + dy > HEIGHT || y + dy < 0)
        dy = -dy;
    x += dx;
    y += dy;
}
