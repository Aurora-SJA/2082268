document.addEventListener("DOMContentLoaded", function() {
    const changeStyleButton = document.getElementById("changeStyleButton");
    const demoParagraph = document.getElementById("demo");
  
    changeStyleButton.addEventListener("click", function() {
      demoParagraph.style.fontSize = '35px';
    });
  });
  