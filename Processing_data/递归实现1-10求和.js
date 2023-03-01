// 1-n的阶乘
function multiplication(n) {
  if (n === 1) {
    return n;
  } else {
    return n * multiplication(n - 1);
  }
}
console.log(multiplication(5));

// 1-n的累加和
function num(n) {
  if (n == 1) return 1;
  return num(n - 1) + n;
}
console.log(num(5));

// 斐波那契数列
// 1,1,2,3,5,8,13,21...
function getNum(n) {
  if (n === 1 || n === 2) return 1;
  return getNum(n - 1) + getNum(n - 2);
}
console.log(getNum(7));