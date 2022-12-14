// allList  selectedList  unSelected这三个数组
let allList = [
  { id: 0, channel: "建筑" },
  { id: 1, channel: "体育" },
  { id: 2, channel: "人文" },
  { id: 3, channel: "娱乐" },
];
let selectedList = [
  { id: 1, channel: "体育" },
  { id: 3, channel: "娱乐" },
];

// 方法一:
// allList.map((item1) => {
//   selectedList.map((item2) => {
//     if (item1.id == item2.id) {
//       item1.isRepeat = true;
//     }
//   });
// });

// console.log(allList);// 此时所有列表中重复的部分已经打了标记
// const unSelected = [];
// allList.map((item) => {
//   if (!item.isRepeat) { // 如果没有这个标记,就说明是不重复的
//     unSelected.push(item);
//   }
// });
// console.log(unSelected);

// 方法二:
// let unSelected = []
// function findUnSelected(allList, selectedList) {
//   return allList.filter(obj => {
//     const index = selectedList.findIndex(obj2 => obj2.id === obj.id)
//     if (index === -1) unSelected.push(obj)
//   })
//   return unSelected
// }
// findUnSelected(allList, selectedList)
// console.log(unSelected)

// 方法三:
function diff(all = [], selected = []) {
  return all.reduce((prev, cur) => {
    const index = selected.findIndex((obj) => obj.id === cur.id);
    if (index === -1) prev.push(cur);
    return prev;
  }, []);
}
let unSelected = diff(allList, selectedList);
console.log(unSelected);
