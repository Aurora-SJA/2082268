var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(150, 80);
ctx.lineTo(300, 230);
ctx.lineTo(150, 230);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150, 80);
ctx.lineTo(150, 230);
ctx.strokeStyle = 'sienna';
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 230);
ctx.lineTo(250, 230);
ctx.lineTo(150, 280);
ctx.lineTo(50, 230);
ctx.fillStyle = "peru";
ctx.fill();
ctx.closePath();