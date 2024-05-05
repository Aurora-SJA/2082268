
'use strict'


const temperature = 21.3
const fruits = ['pomme', 'poire', 'orange']
let nombre = 18;
let texte = 'dis-huit';
let istrue = true;
let nuull = null;
let uundefined = undefined;

console.log('Salut.');
console.log(temperature);
console.log(fruits);
console.log('La température est ', temperature);
console.log('La collection de fruits est', fruits);
console.log("<h1>Pas d'interpréteur HTML</h1>");
console.log(nombre, texte, istrue, nuull, uundefined);

console.group('Ceci est un groupe a part');
console.log('Contenu du groupe');
console.groupEnd();

console.groupCollapsed('Ceci est un second groupe à part (fermé par défaut)');
console.log('Contenu du groupe');
console.groupEnd();

