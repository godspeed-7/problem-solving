function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(b);
  }
}

fibonacci(7);
