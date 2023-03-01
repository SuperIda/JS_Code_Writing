// 数组扁平化处理 第一个参数是数组  第二个参数是定制需要扁平化的层数
function Flatten(arr, count = 1) {
  if (count < 1) return arr;
  let nodeList = [];
  arr.forEach((item) => {
    // 子元素是数组的话
    if (Array.isArray(item)) {
      const newArr = Flatten(item, count - 1);
      // nodeList = nodeList.concat(newArr);
      nodeList = [...nodeList, ...newArr];
    } else {
      nodeList.push(item);
    }
  });
  return nodeList;
}

const list = [1, [2, [3, [4, [5, [6]]]]]];
// console.log(list.flat(5));
console.log(Flatten(list, 5));
