'use strict'

const VIRGULE = ', ';
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
];

const phrase1 = tableau[0] + VIRGULE + tableau[1] + VIRGULE + tableau[2] + VIRGULE + tableau[3] + '.';
const phrase2 = tableau[1] + VIRGULE + tableau[0] + VIRGULE + tableau[3] + VIRGULE + tableau[2] + '.';
const phrase3 = tableau[3] + VIRGULE + tableau[2] + VIRGULE + tableau[0] + VIRGULE + tableau[1] + '.';
const phrase4 = tableau[2] + VIRGULE + tableau[0] + VIRGULE + tableau[3] + VIRGULE + tableau[1] + '.';

document.write("<p>" + phrase1 + "</p>");
document.write("<p>" + phrase2 + "</p>");
document.write("<p>" + phrase3 + "</p>");
document.write("<p>" + phrase4 + "</p>");