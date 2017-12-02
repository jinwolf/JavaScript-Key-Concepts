// function $String(thing) {
//   String.call(this, thing);
//   this.thing = thing;
//   this.length = thing.length;
// }
//
// $String.prototype = Object.create(String.prototype);
// $String.prototype.valueOf = $String.prototype.toString = function() {
//   return this.thing;
// }
//
// // Object.defineProperty($String.prototype, 'length', {
// //   get: function() {
// //    return this.toString().length;
// // }});
//
// $String.prototype.constructor = $String;
//
// let name = new $String('Bruce Lee');
// console.log(name.replace('Bruce', 'Linda'));
// console.log(name.length);
//
//
// // "TypeError: String.prototype.toString is not generic"
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Read-only
//

// let p = {};
// console.log(p.prototype);
// // console.log(p[[prototype]]);
// console.log(p.__proto__);
// console.log(p.__proto__.__proto__);
//
// console.log(Object.getPrototypeOf(p) === p.__proto__);
//
// function Person() {
//
// }
//
// console.log(Person.prototype);
//
// let func = new Function();
//
// let p = new Person();
// console.log(p.prototype);
//
// console.log(func.prototype);

const age = 200;

function Person(age) {
  this.age = age;
}

Person.prototype.getAge = function() {
  if (!this) {
    return age;
  }

  return this.age;
}

function Police(age) {
  Person.call(this, age);

  this.name = "Robert";
}
Police.prototype = Object.create(Person.prototype);
// Police.prototype.constructor = Police;
Police.prototype.find = function() {
  return 'found!';
}

function PoliceChild(age) {
  Police.call(this, age);
}

PoliceChild.prototype = Object.create(Police.prototype);
PoliceChild.prototype.constructor = PoliceChild;
let po = new Police(1);
let poc = new PoliceChild(2);

console.log(po.name);
console.log(po.constructor);
console.log(po.getAge());
console.log(po.find());

console.log(poc.name);
console.log(poc.constructor);
console.log(poc.getAge());
console.log(poc.find());
