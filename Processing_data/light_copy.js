// way1: Object.assign
// var obj = {
//     age: 18,
//     nature: ['smart', 'good'],
//     names: {
//         name1: 'fx',
//         name2: 'xka'
//     },
//     love: function () {
//         console.log('fx is a great girl')
//     }
// }
// var newObj = Object.assign({}, obj);

// way2: slice
// const fxArr = ["One", "Two", ["Three", "four"]]
// const fxArrs = fxArr.slice(0)
// fxArrs[1] = 111;// 修改第一层数据, 两个数组不会互相影响
// fxArrs[2].push(222);// 修改新数组的第二层, 旧数组也会受影响, 第三元素都变成3位了
// console.log(fxArr, fxArrs) // ['One', 'Two', Array(3)], ['One', 111, Array(3)]

// way3: concat
// const fxArr = ["One", "Two", ["Three", "four"]]
// const fxArrs = fxArr.concat()
// fxArrs[1] = 111;// 修改第一层数据, 两个数组不会互相影响
// fxArrs[2].push(222);// 修改新数组的第二层, 旧数组也会受影响, 第三元素都变成3位了
// console.log(fxArr, fxArrs) // ['One', 'Two', Array(3)], ['One', 111, Array(3)]

// way4: 拓展运算符
const fxArr = ["One", "Two", ["Three", "four"]];
const fxArrs = [...fxArr];
fxArrs[1] = 111; // 修改第一层数据, 两个数组不会互相影响
fxArrs[2].push(222); // 修改新数组的第二层, 旧数组也会受影响, 第三元素都变成3位了
console.log(fxArr, fxArrs); // ['One', 'Two', Array(3)], ['One', 111, Array(3)]
