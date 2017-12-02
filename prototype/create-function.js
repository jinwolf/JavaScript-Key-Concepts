// let getName = new Function('first', 'last', 'return `${first} ${last}`');
//
// console.log(typeof getName);
// console.log(getName('Jin', 'Lee'));
//
// console.log(getName.toString());

let name = function getName(first, last) {
  return `${first} ${last}`;
}

console.log(name('Jin', 'Lee'));
console.log(name.prototype);
console.log(name.__proto__);
