// 防抖: n秒内只执行一次, 如果n秒内重复触发, 只会执行一次
// way 1: 简单版本的实现
// 1.延迟执行
// 2.干掉上一次的定时器
function debounce1(func, wait) {
  let timer;

  return function () {
    let context = this; // 保存this指向
    let args = arguments; // 拿到event对象

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

// way 2: 防抖如果需要立即执行，可加入第三个参数用于判断，实现如下：
function debounce2(func, wait, immediate) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout); // timeout 不为null
    if (immediate) {
      let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}

function debounce3(callback, delay, immediate) {
  //result变量用于接收返回值
  let result,
    //这里的timeout复制操作只在首次触发事件时执行一次
    timeout = null;
  //函数用一个变量接收,后续用于定义取消方法
  const debounced = function (...args) {
    if (timeout) clearTimeout(timeout);
    //为true时立即执行
    if (immediate) {
      //首次触发事件时保存！timeout的值必定为true
      const callNow = !timeout;
      //定时器赋值给timeout，timeout的值变为定时器id
      timeout = setTimeout(() => {
        //delay毫秒以后定时器才会置空
        timeout = null;
      }, delay);
      //首次必定执行，非首次以后，如果是delay毫秒内再次触发事件，则不执行，因为此时callNow为false；反之delay毫秒后触发事件则立即执行
      if (callNow) result = callback.apply(this, args);
      //为false时延迟执行
    } else {
      timeout = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    }
    return result;
  };
  debounced.cancel = () => {
    if (timeout) clearTimeout(timeout);
    //如果immediate为true，取消后再次触发事件仍旧能立即执行
    timeout = null;
  };
  return debounced;
}

// ==============================test
const ipt = document.querySelector("#ipt");
ipt.addEventListener(
  "keyup",
  debounce1(() => {
    console.log(ipt.value);
  }, 500)
);
// ipt.addEventListener(
//   "keyup",
//   debounce2(() => {
//     console.log(ipt.value);
//   }, 500)
// );
// ipt.addEventListener(
//   "keyup",
//   debounce3(() => {
//     console.log(ipt.value);
//   }, 500)
// );