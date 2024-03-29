// 方法一: 递归
//! deepFirstSearch接受两个参数，
// 第一个参数是需要遍历的节点，第二个是节点所存储的数组，并且返回遍历完之后的数组，
// 该数组的元素顺序就是遍历顺序
function DFS(node, nodeList=[]) {
  if (node) {
    nodeList.push(node.val);
    if (node.children) {
      node.children.forEach((item) => {
        DFS(item, nodeList);
      });
    }
  }
  return nodeList;
}

// 方法二: 栈  先进后出
function DFS2(node) {
  const stack = [];
  const nodeList = [];
  if (node) {
    stack.push(node);
  }
  while (stack.length) {
    let n = stack.pop();
    nodeList.push(n.val);
    if (n.children) {
      for (let i = n.children.length - 1; i >= 0; i--) {
        stack.push(n.children[i]);
      }
    }
  }
  return nodeList;
}

const tree = {
  val: 1,
  children: [
    { val: 2 },
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [{ val: 7 }, { val: 8 }],
        },
        { val: 6 },
      ],
    },
    { val: 4 },
  ],
};

console.log(DFS(tree, []));//1,2,3,5,7,8,6,4
console.log(DFS2(tree));
