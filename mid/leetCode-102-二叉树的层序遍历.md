*原题链接：👉：[二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/)*

题目描述:

1. 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。


示例：
二叉树：[3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回结果：
```
[
  [3],
  [9,20],
  [15,7]
]
```

思路：
> 组织一个`Map`存储每一层的节点数组，然后遍历的时候，每个值都知道自己是第几层，然后在`push`进对应的数组，最后输出即可？

```
var levelOrder = function(root) {
    let nodeMap = {},
        resArr = [];
    let key = 0;
    const fs = (mapKey, Root) => {
        if(!Root) return;
        if(!nodeMap[mapKey]) {
            nodeMap[mapKey] = [];
        }
        nodeMap[mapKey].push(Root.val);
        fs(mapKey + 1, Root.left);
        fs(mapKey + 1, Root.right);
    };
    fs(key, root);
    for(let i in nodeMap) {
        resArr.push(nodeMap[i]);
    }
    return resArr;
};
```

看了看优秀的题解，[题解链接](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/)，tqltql，学习知识点。🐱‍🏍


什么意思呢？我们按照示例的例子来分析一下：

二叉树：[3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
我们维护一个每层的临时数组`tmpArr`，`arrQueue`，我们开始将`root`放入`arrQueue`中，
`arrQueue = [3]`， 然后存在长度，判断长度，长度为`1`，即里面有多少个节点，因为下一步要对这些节点这一层统一遍历，因此开始一个`for`循环里面的节点，节点存在`left`、`right`子节点的，统统将`push`进数组，为的是下一轮循环。（有点含糊😂）

```
var levelOrder = function(root) {
    if(!root) return [];
    let resArr = [],
        arrQueue = [root];
    while(arrQueue.length) {
        let tmpArr = [];
        const aLen = arrQueue.length;
        for(let i = 0; i < aLen; i++) {
            let nowVal = arrQueue.shift();
            tmpArr.push(nowVal.val);
            if(nowVal.left) arrQueue.push(nowVal.left);
            if(nowVal.right) arrQueue.push(nowVal.right);
        }
        resArr.push(tmpArr);
    }
    return resArr;
};
```