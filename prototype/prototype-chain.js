import assert from 'assert';

let o = {};
let s = 'A brown fox jumps over the fence';
function f() {

}

// console.log(Object.getPrototypeOf(o));
// console.log(Object.getPrototypeOf(s));
// console.log(Object.getPrototypeOf(f));
//
// console.log(o.__proto__);
// console.log(s.__proto__);
// console.log(f.__proto__);
//
// console.log(`${o.__proto__} => ${o.__proto__.__proto__}`)
// console.log(`${f.__proto__} => ${f.__proto__.__proto__} => ${f.__proto__.__proto__.__proto__}`)

let a = { a: 1};
console.log(a.__proto__);
assert.equal(a.__proto__, Object.prototype);
let b = Object.create(a);
console.log(b.__proto__);
assert.equal(b.__proto__, a);

assert.equal(f.__proto__, Object.getPrototypeOf(f));
let f1 = new f();
assert.equal(f1.__proto__, f.prototype);
