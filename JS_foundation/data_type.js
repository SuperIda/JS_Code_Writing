// ==============================================================================
// 全局通用的数据类型判断方法
function getType(obj) {
    let type = typeof obj;
    if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
        return type;
    }
    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}

var a = "iamstring.";
var b = 222;
var c = [1, 2, 3];
var d = new Date();
var e = function () { alert(111); };
var f = function () { this.name = "22"; };



// ==============================================================================
//! typeof
alert(typeof a)  // string
alert(typeof b)  // number
alert(typeof c)  // object
alert(typeof d)  // object
alert(typeof e)  // function
alert(typeof f)  // function
// 其中typeof返回的类型都是字符串形式，需注意，例如：
// 另外typeof 可以判断function的类型；在判断除Object类型的对象时比较方便。
alert(typeof a == "string") // true
alert(typeof a == String) // false
// null返回的是Object 复杂数据类型除function外,返回的都是Object



// ==============================================================================
//! instanceof 判断已知对象类型的方法
// 注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。/
alert(c instanceof Array) // true/
alert(d instanceof Date)/
alert(f instanceof Function) // true/
alert(f instanceof Function) // false/
// 基本数据类型不能用



// ==============================================================================

//! constructor 根据对象的constructor判断, 只能检测字面量方式创建的对象类型
alert(c.constructor === Array) // true
alert(d.constructor === Date) // true
alert(e.constructor === Function) // true
// 注意： constructor 在类继承时会出错
// eg：
function A() { };
function B() { };
A.prototype = new B(); //A继承自B
var aObj = new A();
alert(aobj.constructor === B) // true;
alert(aobj.constructor === A)// false;
// 而instanceof方法不会出现该问题，对象直接继承和间接继承的都会报true：
alert(aobj instanceof B) // true;
alert(aobj instanceof B) // true;
// 言归正传，解决construtor的问题通常是让对象的constructor手动指向自己：
aobj.constructor = A; //将自己的类赋值给对象的constructor属性
alert(aobj.constructor === A) // true;
alert(aobj.constructor === B) // false; //基类不会报true了;


// ==============================================================================

//! prototype 通用但很繁琐的方法
// 大小写不能写错，比较麻烦，但胜在通用。
console.log(Object.prototype.toString.call(a) === '[object String]') // true;
console.log(Object.prototype.toString.call(b) === '[object Number]') // true;
console.log(Object.prototype.toString.call(c) === '[object Array]') // true;
console.log(Object.prototype.toString.call(d) === '[object Date]') // true;
console.log(Object.prototype.toString.call(e) === '[object Function]') // true;
console.log(Object.prototype.toString.call(f) === '[object Function]') // true


// ==============================================================================

//!内置的方法
// array is Array
// number? NAN?