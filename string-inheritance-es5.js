function $String(thing) {
  String.call(this, thing);
  this.thing = thing;
  this.length = thing.length;
}

$String.prototype = Object.create(String.prototype);
$String.prototype.valueOf = $String.prototype.toString = function() {
  return this.thing;
}

// Object.defineProperty($String.prototype, 'length', {
//   get: function() {
//    return this.toString().length;
// }});

$String.prototype.constructor = $String;

let name = new $String('Bruce Lee');
console.log(name.replace('Bruce', 'Linda'));
console.log(name.length);


// "TypeError: String.prototype.toString is not generic"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Read-only
