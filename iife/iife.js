// iife stands for immeidately invokable function expression

// Expression vs. Statement
//https://stackoverflow.com/questions/19132/expression-versus-statement

let a = function(thing) {
  console.log('immediately invoked!');
  console.log(thing);
}('A brown fox jumps over the fence');

(function(thing) {
  console.log('immediately invoked!');
  console.log(thing);
})('A brown fox jumps over the fence');

(function(thing) {
  console.log('immediately invoked!');
  console.log(thing);
}('A brown fox jumps over the fence'));
