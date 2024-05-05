let phrase = "The strength of JavaScript is that you can do anything. The weakness is that you will.";

console.log("La phase entière:", phrase);
console.log("La longueur de la chaine de caractère:", phrase.length);
console.log("La position du mot JavaScript:", phrase.indexOf("JavaScript"));
console.log("La position du dernier 'is':", phrase.lastIndexOf("is"));
console.log("La dernière phrase seulement:", phrase.substring(phrase.lastIndexOf("is")));
console.log("Les 10 caractères à partir du 17e caractère:", phrase.substr(16, 10));
console.log("Combient de mots dans la phrase:", phrase.split(" ").length);
console.log("Le 61e caractère:", phrase.charAt(60));
console.log("Remplacer 'you' par 'I' dans toute la phrase:", phrase.replace(/you/g, 'I'));
