// memorize 用于缓存给定函数的结果，以防止多次使用相同参数调用计算代价高昂的例程。
function memorize(func) {
  const cache = new Map();
  return function () {
    const key = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}
// ======test斐波那契数列
function fibonacci(n) {
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memorizedFibonacci = memorize(fibonacci);

console.time("total");
console.time("sub1");
const result1 = memorizedFibonacci(30);
console.timeEnd("sub1");
console.time("sub2");
const result2 = memorizedFibonacci(29);
console.timeEnd("sub2");
console.time("sub3");
const result3 = memorizedFibonacci(30);
console.timeEnd("sub3");
console.timeEnd("total");