// 广度优先遍历, 利用队列  先进先出
function BFS(node) {
  let nodeList = [];
  let queue = [];
  if (node) {
    queue.push(node);
  }
  while (queue.length) {
    let n = queue.shift();
    nodeList.push(n.val);
    if (n.children) {
      n.children.forEach((item) => queue.push(item));
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

console.log(BFS(tree));// 1, 2, 3, 4, 5, 6, 7, 8
