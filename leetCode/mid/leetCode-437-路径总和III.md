*原题链接：👉：[路径总和 III](https://leetcode-cn.com/problems/path-sum-iii/description/)*

题目描述:

1. 给定一个二叉树，它的每个结点都存放着一个整数值。

2. 找出路径和等于给定数值的路径总数。

3. 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

4. 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例 1：
```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```

思路：

> 深度遍历，对于每一个节点，无法只有两种选择，选或者不选，当选的时候，这个状态还会遗传给子节点，也就是因为题目的路径是连续的，因此，如果父节点选了，那么子节点一定也得选，不能跨过而选孙子节点。

```
var pathSum = function(root, targetSum) {
    const dfsPath = (Root) => {
        if(!Root) return 0;
        const dfsSonRoot = (ROOT, sum, bool) => {
            if(!ROOT) return 0;
            let flag = 0; 
            if(bool) { // 如果选了节点，那么此节点也必选;
                flag = ROOT.val === sum ? 1 : 0;
                flag += dfsSonRoot(ROOT.left, sum - ROOT.val, true);
                flag += dfsSonRoot(ROOT.right, sum - ROOT.val, true);
            } else { // 如果节点没选，左右子节点可以选，可以不选
                flag += dfsSonRoot(ROOT.left, sum , true);
                flag += dfsSonRoot(ROOT.right, sum, true);
                flag += dfsSonRoot(ROOT.left, sum, false);
                flag += dfsSonRoot(ROOT.right, sum, false);
            }
            return flag;
        }
        let cho = dfsSonRoot(Root, targetSum, true); // 选
        let nor = dfsSonRoot(Root, targetSum, false); // 不选
        return cho + nor;
    }
    return dfsPath(root);
};
```