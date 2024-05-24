var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Draw the square face
var faceX = 100;
var faceY = 50;
var faceSize = 100;

context.fillStyle = 'yellow';
context.fillRect(faceX, faceY, faceSize, faceSize);
context.lineWidth = 2;
context.strokeStyle = 'black';
context.strokeRect(faceX, faceY, faceSize, faceSize);


var eyeSize = 10;
var eyeXOffset = 25;
var eyeYOffset = 25;

context.fillStyle = 'black';
context.fillRect(faceX + eyeXOffset, faceY + eyeYOffset, eyeSize, eyeSize);
context.fillRect(faceX + faceSize - eyeXOffset - eyeSize, faceY + eyeYOffset, eyeSize, eyeSize);

var mouthWidth = 50;
var mouthHeight = 10;
var mouthX = faceX + (faceSize - mouthWidth) / 2;
var mouthY = faceY + faceSize - 30;

context.fillRect(mouthX, mouthY, mouthWidth, mouthHeight);
