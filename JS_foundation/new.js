function mynew(Func, ...args) {
  // 1.创建一个新对象
  const obj = {};
  // 2.新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype;
  // 3.将构建函数的this指向新对象
  let result = Func.apply(obj, args);
  // 4.根据返回值判断: 没有返回值或者返回值是简单数据类型的话, 就返回刚才的对象
  return result instanceof Object ? result : obj;
}

// test:
function Person(name, age) {
  this.name = name;
  this.age = age;
  // return { a: 1 };
}
Person.prototype.say = function () {
  console.log(this.name);
};
let p = mynew(Person, "Ida", 18);
console.log(p); // Person {name: 'Ida', age: 18}
p.say(); // Ida