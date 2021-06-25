*原题链接：👉：[二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/solution/er-cha-shu-de-zhi-jing-by-leetcode-solution/)*

题目描述:

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

示例：
```
          1
         / \
        2   3
       / \     
      4   5    
```
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。


思路：

> 深度遍历，反正是找最长的
1. 找`左`、`右`，
```
// 获取左子树
let leftPath = dfsEveryRootPath(Root.left);
// 获取右子树
let rightPath = dfsEveryRootPath(Root.right);
```

1. 如果对于某一个节点，左右相加是最长，那么就记录下来，`+1`是因为该节点也算一个数，
```
maxPath = Math.max(maxPath, leftPath + rightPath + 1);
```

2. 如果头上还有数，当然当前节点的左右子树只能二选一，取当成上一个节点的其中一边。

```
Math.max(leftPath, rightPath) + 1
```

**code**
```
var diameterOfBinaryTree = function(root) {
    // 初始假设有根节点
    let maxPath = 1;
    const dfsEveryRootPath = (Root) => {
        if(!Root) return 0;
        // 获取左子树
        let leftPath = dfsEveryRootPath(Root.left);
        // 获取右子树
        let rightPath = dfsEveryRootPath(Root.right);
        maxPath = Math.max(maxPath, leftPath + rightPath + 1);
        return Math.max(leftPath, rightPath) + 1;
    };
    dfsEveryRootPath(root)
    return maxPath - 1;
};
```