// iife stands for immeidately invokable function expression


let a = function(thing) {
  console.log('immediately invoked!');
  console.log(thing);
}('A brown fox jumps over the fence');

(function(thing) {
  console.log('immediately invoked!');
  console.log(thing);
}('A brown fox jumps over the fence'));
