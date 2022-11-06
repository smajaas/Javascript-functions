//Closure
//Closure gives you an access to an outer function's scope from an inner function
//Make private variables with closures

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`Hello there secret is: ${privateVar} `);
  }
  return inner;
  inner();
}
//console.log(privateVar);
outer()();

const value = outer();
console.log(value);
value();
