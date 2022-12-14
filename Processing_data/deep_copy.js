// 方法一: JSON.stringify()和JSON.parse()  优缺点
const obj = {
  a: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/, // 正则变成空对象,a: {}
  b: new Date(), // b: "2022-08-30T07:31:16.214Z"
  d: Symbol(1), // 丢了
  e: undefined, // 丢了
  sing: function () {
    //丢了
    console.log("唱歌");
  },
  name: "andy", // 对的
  id: 1, // 对的
  color: ["pink", "red"], // 对的
  c: null, // 对的
  msg: {
    // 对的
    age: 18,
  },
};
// const newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj)

// 方法二: 循环递归
// 1.只考虑Object和Array的话, for...in遍历, 然后递归拷贝
function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone1(originValue) {
  // 判断传入的originValue是否是一个引用数据类型
  if (!isObject(originValue)) {
    return originValue;
  }

  // 判断传入的originValue是对象还是数组, 后面还要以原来的形式return出去
  const newValue = Array.isArray(originValue) ? [] : {};

  // for...in加递归  return拷贝后的值
  for (const key in originValue) {
    // key代表索引或者键名 originValue[key]代表元素或者键值
    newValue[key] = deepClone1(originValue[key]);
  }
  return newValue;
}

// 2.日期,函数,Symbol,正则,Error,Map,Set 等数据类型特殊处理
// 2.1 需要new 的类型: 日期, 正则,
// 2.2 可以直接return的类型:
function deepClone2(originValue) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) return new Set([...originValue]);
  // 判断是否是一个Map类型
  if (originValue instanceof Map) return new Map([...originValue]);
  // 判断如果是Symbol的value, 那么创建一个新的Symbol, 也可以写成return Symbol(originValue.description)
  if (originValue instanceof Symbol) return new Symbol(originValue);
  // 判断如果是函数类型直接使用同一个函数; 不用new Function()创建新的函数, 因为如果函数太复杂的话不好操作, 直接就用原来的函数就行
  if (originValue instanceof Function) return originValue;
  // 判断如果是日期类型, 那么创建一个新日期
  if (originValue instanceof Date) return new Date(originValue);
  // 判断如果是正则类型, 那么创建一个新正则
  if (originValue instanceof RegExp) return new RegExp(originValue);
  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) return originValue;
  // 判断传入的对象是数组, 还是对象
  const newValue = Array.isArray(originValue) ? [] : {};
  // for..in遍历 + 递归
  for (const key in originValue) {
    newValue[key] = deepClone2(originValue[key]);
  }
  // 对Symbol的key进行特殊的处理, 因为symbol作为key的时候, 是不能被遍历的
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const sKey of symbolKeys) {
    // const newSKey = Symbol(sKey.description)
    newValue[sKey] = deepClone2(originValue[sKey]);
  }
  return newValue;
}

// 3.循环引用问题解决:
// 3.1 思路: 将每次拷贝的数据进行存储，每次在拷贝之前，先看该数据是否拷贝过，如果拷贝过直接返回不再拷贝，如果没有拷贝对该数据进行拷贝并记录该数据以拷贝
// 3.2 方法: 使用数组; 使用Map数据(强引用, 无法被垃圾回收); 使用hash表(weakMap,弱引用, 可以被垃圾回收)
function deepClone3(originValue, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) return new Set([...originValue]);
  // 判断是否是一个Map类型
  if (originValue instanceof Map) return new Map([...originValue]);
  // 判断如果是Symbol的value, 那么创建一个新的Symbol
  if (originValue instanceof Symbol) return new Symbol(originValue);
  // 判断如果是函数类型, 那么直接使用同一个函数(也可以用bind拷贝一份)
  if (originValue instanceof Function) return originValue;
  // 判断如果是日期类型, 那么创建一个新日期
  if (originValue instanceof Date) return new Date(originValue);
  // 判断如果是正则类型, 那么创建一个新正则
  if (originValue instanceof RegExp) return new RegExp(originValue);
  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) return originValue;
  // 如果拷贝过, 就直接去map里取值
  if (map.has(originValue)) return map.get(originValue);
  // 判断传入的对象是数组, 还是对象
  const newValue = Array.isArray(originValue) ? [] : {};
  // 
  map.set(originValue, newObject);
  // 
  for (const key in originValue) {
    newValue[key] = deepClone3(originValue[key], map);
  }
  // 对Symbol的key进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const sKey of symbolKeys) {
    // const newSKey = Symbol(sKey.description)
    newValue[sKey] = deepClone3(originValue[sKey], map);
  }
  return newValue;
}
