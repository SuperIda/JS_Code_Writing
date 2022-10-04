//eg: 调用reverse('ABC') ---> 打印'CBA'
String.prototype._reverse = function (str) {
  return str.split('').reverse().join('')
}
const res = new String()._reverse('hello')
console.log(res)
