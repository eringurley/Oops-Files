const fs = require('fs');

function createFile() {
  const nameArray = ['dinosaur', 'dragon', 'drake', 'elemental','goblin', 'planeswalker', 'shade', 'weird', 'wizard'];
  var randomWord = nameArray[Math.floor(Math.random() * nameArray.length)];
  
  console.log(randomWord);
}