var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var centerX = 150;
var centerY = 100;
var radius = 50;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.closePath();

context.beginPath();
context.arc(centerX - 20, centerY - 20, 5, 0, 2 * Math.PI, false);
context.fillStyle = 'black';
context.fill();
context.closePath();

context.beginPath();
context.arc(centerX + 20, centerY - 20, 5, 0, 2 * Math.PI, false);
context.fillStyle = 'black';
context.fill();
context.closePath();

context.beginPath();
context.arc(centerX, centerY, 30, 0, Math.PI, false);
context.strokeStyle = 'black';
context.stroke();
context.closePath();
