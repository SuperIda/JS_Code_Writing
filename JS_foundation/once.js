// Once 函数是一种在已经调用过后将防止再次执行的方法。特别适用于处理仅应该运行一次的事件监听器，而不是在每次都移除事件监听器;
function once(func) {
  let ran = false;
  let result;
  return function () {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}
// ============按钮发请求test
const url = "https://api.thecatapi.com/v1/images/search?limit=1";

//! 用XMLHttpRequest去发网络请求
//   const Http = new XMLHttpRequest();
//   Http.open("GET", url);
//   Http.send();

//   Http.onreadystatechange = (e) => {
//     console.log(Http.responseText);
//   };

//! 用es6的fetch去发网络请求
const getPic = () => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
      const img = document.querySelector("img");
      img.src = res[0].url;
    })
    .catch((err) => {
      console.error(err);
    });
};
getPic();
const btn = document.querySelector("button");
// 没使用once函数, 只要点击就会发起请求
// btn.addEventListener("click", () => getPic());

// 使用once函数, 只可以请求一次
const sendRequestOnce = once(getPic);
btn.addEventListener("click", sendRequestOnce);