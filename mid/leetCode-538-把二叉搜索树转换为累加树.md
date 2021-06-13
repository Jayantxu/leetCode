*原题链接：👉：[把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/description/)*

题目描述:

1. 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

2. 提醒一下，二叉搜索树满足下列约束条件：
    - 节点的左子树仅包含键 小于 节点键的节点。
    - 节点的右子树仅包含键 大于 节点键的节点。
    - 左右子树也必须是二叉搜索树。
注意：本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同

示例 1：

![示例1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png)
```
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

```
输入：root = [0,null,1]
输出：[1,null,1]
```
思路：

> 一开始差点看不懂题，没看明白`4` -> `1`的36是怎么来的，后来，看到`3`的33，才知道，那不就是`右中左`吗，中序遍历再反向。

> 然后就转换成了中序遍历，然后反向求一下一个个累加求出。

> 另外还给坑了一下，一开始写还以为是返回数组。

**code**

```
var convertBST = function(root) {
    // 中序遍历，反转，然后累加
    let inArr = [];
    let inTraverse = (Root) => {
        if(!Root) return;
        if(Root.left) {
            inTraverse(Root.left);
        }
        inArr.push(Root);
        if(Root.right) {
            inTraverse(Root.right);
        }
    };
    inTraverse(root);
    // inArr.reverse();
    // !要返回树，不是值的数组
    // for(let i = 1; i < inArr.length; i++) {
    //     inArr[i] = inArr[i] + inArr[i - 1];
    // }
    for(i = inArr.length - 2; i >= 0; i--) {
        inArr[i].val = inArr[i].val + inArr[i + 1].val;
    }
    return root;
};
```