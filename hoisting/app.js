//Hoisting
//function and var declarations are hoisted
//safer to access only after initialized

display();
moreComplex();
//console.log(firstName);
//console.log(lastName);
//console.log(randomName);
const firstName = 'Ajaas';
let lastName = 'Afaan';
var randomName = 'random';

function display() {
  console.log('hello world');
}
//display()

function moreComplex() {
  console.log(`${firstName} ${lastName} ${randomName}`);
}
//moreComplex();
