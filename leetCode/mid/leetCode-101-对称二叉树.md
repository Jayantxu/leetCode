*原题链接：👉：[对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/description/)*

题目描述:

1. 给定一个二叉树，检查它是否是镜像对称的。


例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
示例：
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的
```
输入:
   1
   / \
  2   2
   \   \
   3    3
```

思路：
> 进阶里面提示能不能用递归和迭代，递归应该可以？一层一层的比较，再进入下层，先比较节电的相同，然后依次再比较左右节电。

```
var isSymmetric = function(root) {
    const isMirror = (leftRoot, rightRoot) => {
        if(!leftRoot && !rightRoot) {
            return true;
        } else if (leftRoot && !rightRoot) {
            return false;
        } else if (!leftRoot && rightRoot) {
            return false;
        }
        return ((leftRoot.val === rightRoot.val) && 
                isMirror(leftRoot.left, rightRoot.right) &&
                isMirror(leftRoot.right, rightRoot.left)
            )
    }
    if(!root) return true;
    return isMirror(root.left, root.right)
};
```

