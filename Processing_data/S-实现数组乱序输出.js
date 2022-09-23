// 大概思路就是遍历数组里的每一个元素,然后生成一个随机数,交换这个元素与生成随机数代表的索引的位置;
// 然后再找下一个元素,继续生成除了上一次生成的随机数以外的数(通过改变随机数的生成范围),继续交换,以此类推...
// 注意的点就是随机数的取值范围应该是每次循环后都缩小的。

function derange(arr) {
  // 以下写法乱序后的数组有概率与原数组一致,数组元素越多,概率越低
  for (let i = 0; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (arr.length - i) + i);
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  // 以下写法乱序后的数组必定与原数组不同
  //   for (let i = 1; i < arr.length; i++) {
  //     const random = Math.floor(Math.random() * (arr.length - i) + i)
  //     i === 1 ? ([arr[0], arr[random]] = [arr[random], arr[0]]) : ([arr[i], arr[random]] = [arr[random], arr[i]])
  //   }
  return arr;
}
