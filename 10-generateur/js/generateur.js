/**
 * Exercice - generateur
 *
 * Consignes:
 *  Créer le fichier js/generateur.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 *
 * Note: L'usage des fonctions évite la duplication du code. (IMPORTANT)
 */
'use strict'
function createItem(item){
    return '<li>' + item + '</li>';
}
function createList(items){
    var list = '';
    items.forEach(function(item){
        list += createItem(item);
    });
    return '<ul>' + list + '</ul>';
}
