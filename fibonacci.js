function calculateFibonacci() {
  let map = new Map();
  return function (n) {
    if(map.has(n)) return map.get(n);
    let temp = [];
    let a = 0;
    let b = 1;
    let c;
    temp.push(a);
    temp.push(b);
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
      temp.push(b);
    }
    map.set(n, temp);
    return temp;
  }
}

const fibo = calculateFibonacci();
console.log(fibo(7));