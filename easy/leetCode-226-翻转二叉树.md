
*原题链接：👉：[翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/description/)*

题目描述:

翻转一棵二叉树。


示例：

输入
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

思路：

> 递归，依次处理左右

```
var invertTree = function(root) {
    const tranvert = (root) => {
        if(!root) return;
        [root.left, root.right] = [root.right, root.left];
        tranvert(root.left);
        tranvert(root.right);
    }
    tranvert(root);
    return root;
};
```