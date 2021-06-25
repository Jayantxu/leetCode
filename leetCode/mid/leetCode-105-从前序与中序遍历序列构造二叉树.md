*原题链接：👉：[从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)*

题目描述:

1. 根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

示例：
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

```
    3
   / \
  9  20
    /  \
   15   7
```

思路： 
> 用二叉树的遍历特征进行拆分，然后再对拆分后的子序列进行相同的操作。

前序遍历：中左右；中序遍历：左中右。
因此一个前序遍历的*第一个*节点，一定是根节点，而找到根节点之后，对中序遍历来说，根节点左边的子序列，一定是左子树，因此我们可以再次区分出左右子树，然后重复以上操作即可。

```
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
};
```