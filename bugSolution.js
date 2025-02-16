function foo(a, b) {
  if (a === undefined || b === undefined) {
    return 0; // Or handle undefined as appropriate
  }
  return a + b;
}
console.log(foo(1, undefined)); // 0
console.log(foo(1, 2)); // 3