// 这里不能直接使用箭头函数，否则无法访问到 this
// map 中的 exc 接受三个参数，分别是: 元素值、元素下标和原数组
// map 返回的是一个新的数组，地址不一样
Array.prototype.myMap = function (exc) {
  const result = []
  this.forEach((item, index, arr) => {
    result[index] = exc(item, index, arr)
  })
  return result
}
const a = new Array(2).fill(2)
console.log(a.map((item, index, arr) => item * index + 1)) // [1,3]
console.log(a.myMap((item, index, arr) => item * index + 1))// [1,3]

// Array.prototype._map = function (next) {
//   if (typeof next !== "function") throw Error("only function allowed");
//   const newArr = [];
//   for (const item of this) {
//     newArr.push(next(item));
//   }
//   return newArr;
// };

