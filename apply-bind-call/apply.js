import assert from 'assert';

const age = 200;

// in strict mode, `this` is undefined
assert.equal(this, undefined);

function Rectangle(h, w) {
  this.height = h;
  this.weight = w;
}

Rectangle.prototype.calculateArea = function() {
  return this.height * this.weight;
}

let r_1 = new Rectangle(12, 10);
let r_2 = new Rectangle(80, 2);
let r_3 = { height: 2, weight: 100};

let calculateArea = r_1.calculateArea;

assert.equal(calculateArea.apply(r_1), 120, 'fail', 'success');
assert.equal(calculateArea.apply(r_2), 160, `should be 160`);
assert.equal(calculateArea.apply(r_3), 200, `Should be 200`);
