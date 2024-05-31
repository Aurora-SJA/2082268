
'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const numberDiv = document.getElementById('numberDiv');
    const numberImg = numberDiv.querySelector('img');

    function updateImage() {
        const value = numberInput.value;
        numberImg.src = `image/${value}.jpg`;
        numberImg.alt = `Image chiffre ${value}`;
    }

    numberInput.addEventListener('input', updateImage);
});
