document.addEventListener("DOMContentLoaded", function() {
    const turnOnButton = document.getElementById("turnOnButton");
    const turnOffButton = document.getElementById("turnOffButton");
    const lightBulbImage = document.getElementById("myImage");
  
    turnOnButton.addEventListener("click", function() {
      lightBulbImage.src = "C:\\Users\\SPVCE\\OneDrive\\Desktop\\semana4\\14-Exercice\\images\\2.png";
    });
  
    turnOffButton.addEventListener("click", function() {
      lightBulbImage.src = "C:\\Users\\SPVCE\\OneDrive\\Desktop\\semana4\\14-Exercice\\images\\1.png";
    });
  });
  