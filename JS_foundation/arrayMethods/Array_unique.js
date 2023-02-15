//! 简单值类型的数组去重
const list1 = [1, 2, 3, 4, 5, 2, 3];

function handleError(array) {
  if (!Array.isArray(array)) {
    throw new Error("unique function params is not Array");
  }
}

//* 1. filter+indexOf/includes
function unique1(array) {
  handleError(array);
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}
// console.log(unique1(list1))

//* 2. 相邻元素排序
function unique2(array) {
  handleError(array);
  array = array.sort();
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      res.push(array[i]);
    }
  }
  return res;
}
// console.log(unique2(list1));

//* 3. Set 解构赋值

function unique3(array) {
  handleError(array);
  return [...new Set(array)];
}
// console.log(unique3(list1));

//*  4.  Set + Array.from

function unique4(array) {
  handleError(array);
  return Array.from(new Set(array));
}
// console.log(unique4(list1))

//! 对象数组的去重
const list2 = [
  { id: 1, name: "Ida1", age: 18 },
  { id: 2, name: "Ida2", age: 19 },
  { id: 3, name: "Ida3", age: 20 },
  { id: 3, name: "Ida3", age: 20 },
];

//* 1. 临时对象缓存数组项key值 + for循环
function unique5(array, key) {
  handleError(array);
  let res = [];
  let template = {};
  for (let i = 0; i < array.length; i++) {
    var keyName = array[i][key];
    if (template[keyName]) {
      continue;
    }
    template[keyName] = true;
    res.push(array[i]);
  }
  return res;
}
console.log(unique5(list2, "id"));

//* 2. reduce + Map
function unique6(array, key) {
  handleError(array);
  let map=new Map()
  return array.reduce((pre, item) => {
    if(!map.has(item[key])) map.set(item[key],item)&&pre.push(item)
    return pre;
  }, []);
}
// console.log(unique6(list2, "id"));


