// 快速排序
Array.prototype.quickSort = function () {
  const rec = (arr = []) => {
    if (arr.length <= 1) return arr;
    const mid = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), arr[0], ...rec(right)];
  };
  const res = rec(this);
  // 改变原数组
  res.forEach((num, index) => {
    arr[index] = num;
  });
};
const arr = [3, 7, 9, 30, 60, 2];
arr.quickSort();
console.log(arr);
