var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = 75;
var centerY = 75;
var radius = 10;
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'black';
context.fill();
context.closePath();
