function rest(...args) {
  console.log(args[0]);
  console.log(args[1])
  console.log(args[2])

  console.log(args);
}

rest(1, 2, 3);

function rest2(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}

rest2(1, 2, 3, 4, 5, 6);
