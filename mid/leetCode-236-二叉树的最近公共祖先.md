*原题链接：👉：[二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)*

题目描述:

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

思路：

- 一开始想着，遍历二叉树，转换成对象，然后再遍历对象，寻找出节点...

看了下题解，太强了tql😭

[题解二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/jsersi-lu-hao-li-jie-by-hyj8/)

（墙裂建议看看题解解释）

递归的方式解，我们分别遍历左右子树，如果出现了`=p`或者`=q`，那么公共节点有三种可能：
- `q`节点在`p`下，因此节点为`p`；
- `p`节点在另一侧，那么公共节点就是上一个`root`
- 两侧都无，那么这树就没这个节点。

```
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root == q || root == p) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(left && right) {
        return root;
    }
    if(left && !right) {
        return left
    }
    return right;
};
```