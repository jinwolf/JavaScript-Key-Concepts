import assert from 'assert';

class $String extends String {
  constructor(val) {
    super(val);
  }

  capitalize() {
    let str = this.valueOf();
    return `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`;
  }
}

let name = new $String('jin lee');
console.log(name);
console.log(Object.getOwnPropertyNames(name));
assert.ok(name instanceof $String);
assert.ok(name instanceof String);
assert.equal(name.capitalize(), 'Jin lee');
console.log($String.prototype.capitalize);
console.log(String.prototype.capitalize);
