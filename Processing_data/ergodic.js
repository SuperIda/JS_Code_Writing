// 遍历数组 forEach map filter some every reduce reduceRight

// 遍历对象 for...in

var arr = [1, 2, 3, 10];
arr.forEach(function (item, index, array) {
  array[index] = array[index].toString().padStart(2, "0");
});

console.log(arr);
