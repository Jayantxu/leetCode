*原题链接：👉：[二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/)*

题目描述:

1. 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

![中序遍历](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

示例：
```
输入：root = [1,null,2,3]
输出：[1,3,2]
```
```
输入：root = []
输出：[]
```

思路：

> 中序遍历即：左中右，因此，我们按照这个顺序依次遍历左子树，右子树即可。

```
var inorderTraversal = function(root) {
    let treeStack = [];
    const dfs = (dfsRoot) => {
        if(dfsRoot !== null) {
            dfs(dfsRoot.left);
        }
        if(dfsRoot && dfsRoot.val) {
            treeStack.push(dfsRoot.val); 
        }
        if(dfsRoot !== null) {
            dfs(dfsRoot.right);
        }
    }
    dfs(root);
    return treeStack;
};
```

🤒