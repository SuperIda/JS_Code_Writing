// 生成平级的树
function gerRandom(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
function getName(len) {
  let str = "";
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(gerRandom(65, 90));
  }
  return str;
}
function genData(count) {
  let arr = [];
  for (var i = 0; i < count; i++) {
    let obj = {
      id: i,
      name: getName(4),
      pid: i == 0 ? null : gerRandom(0, i - 1),
    };
    arr.push(obj);
  }
  return arr;
}
const list = genData(10);
console.log(list);

// 变成一个根节点的树
// 方法一:用Map
// function getTree(arr = []) {
//   const map = new Map();
//   arr.forEach((item) => map.set(item.id, item));
//   arr.forEach((item) => {
//     if (map.has(item.pid)) {
//       const p = map.get(item.pid);
//       if (!p.children) p.children = [];
//       p.children.push(item);
//     }
//   });
//   return map.get(0);
// }

// console.log(getTree(list));

// 方法二: 递归
// function treeData(list, parentID) {
//   return list.filter((obj) => {
//     if (obj.pid === parentID) {
//       const children = treeData(list, obj.id);
//       if (children.length) {
//         obj.children = children;
//       }
//       return true;
//     }
//   });
// }

// 方法三:
// function tranListToTreeData(list, rootValue) {
//   var arr = [];
//   list.forEach((item) => {
//     if (item.pid === rootValue) {
//       // 找到之后 就要去找 item 下面有没有子节点
//       const children = tranListToTreeData(list, item.id);
//       if (children.length) {
//         // 如果children的长度大于0 说明找到了子节点
//         item.children = children;
//       }
//       arr.push(item); // 将内容加入到数组中
//     }
//   });
//   return arr;
// }

// console.log(treeData(list, null));
