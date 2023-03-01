// instanceof用于判断构造函数的prototype是否出现在实例对象的原型链中的任何位置
function myInstanceof(left, right) {
  // left实例对象  right构造函数
  // 1.判断实例对象不是简单数据类型, 是的话返回false
  if (typeof left !== "object" || left === null) return false;
  // 2. 利用循环在left的原型链中去找right.prototype
  // 情况1: left.__proto__为null, 找到了尽头,没找到,终止循环,最后return false
  // 情况2: left的原型链中找到了right.prototype, return true,终止循环
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  // let proto = Object.getPrototypeOf(left)
  while (left.__proto__) {
    if (left.__proto__ == right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
  return false;
}

// function myInstanceof(left, right) {
//     // 这里先用typeof来判断基础数据类型，如果是，直接返回false
//     if (typeof left !== 'object' || left === null) return false;
//     // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
//     let proto = Object.getPrototypeOf(left);
//     while (true) {
//         if (proto === null) return false;
//         if (proto === right.prototype) return true;//找到相同原型对象，返回true
//         proto = Object.getPrototypeof(proto);
//     }
// }
const Animal = function (name) {
  this.name = name;
};
const dog = new Animal("大黄");
dog instanceof Animal; // true
dog instanceof Object; // true
console.log(myInstanceof(dog, Object));