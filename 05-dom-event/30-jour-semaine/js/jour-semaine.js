'use strict';

const JOURS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const JOURS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

document.addEventListener('DOMContentLoaded', function() {
    const languageCheckbox = document.getElementById('language');
    const dayNumberInput = document.getElementById('dayNumber');
    const displayDiv = document.createElement('div');
    document.body.appendChild(displayDiv);

    function updateDayDisplay() {
        const dayNumber = parseInt(dayNumberInput.value);
        const daysArray = languageCheckbox.checked ? JOURS_EN : JOURS_FR;
        displayDiv.textContent = daysArray[dayNumber];
    }

    languageCheckbox.addEventListener('change', updateDayDisplay);
    dayNumberInput.addEventListener('input', updateDayDisplay);

    updateDayDisplay();
});
