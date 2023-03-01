// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
// 语法:Object.create(proto[, propertiesObject])
// 原理:
Object.create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};
// Object.create方法的实质是新建一个空的构造函数F，
// 然后让F.prototype属性指向参数对象obj，
// 最后返回一个F的实例，从而实现让该实例继承obj的属性.这与new一个实例对象是不一样的。
// Object.create创造的实例，私有属性是空的，但是会继承目标对象的属性。
// 这也是为什么Rectangle.prototype的私有属性是一个空对象，但是__proto__不为空。

// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
// Rectangle.prototype的__proto__属性值是Shape.prototype
Rectangle.prototype = Object.create(Shape.prototype);
// 给Rectangle.prototype这个名为Shape的空对象添加一个私有属性constructor
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

// rect既是Rectangle的实例，也是Shape的实例
console.log(
  "Is rect an instance of Rectangle?",
  rect instanceof Rectangle
); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'