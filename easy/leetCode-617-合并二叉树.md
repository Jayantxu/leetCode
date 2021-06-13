*原题链接：👉：[合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/description/)*

题目描述:

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。


示例：
```
输入: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
输出: 
合并后的树:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7 
```


思路：

> 深度遍历，不断穿左右，如果有一方为空，直接返回不空的即可。感觉二叉树相关的，很多都可以使用`dfs`进行解决。

**code**

```
var mergeTrees = function(root1, root2) {
    const dfsMergeTree = (Root1, Root2) => {
        if(!Root2 || !Root1) {
            return Root2 ? Root2 : Root1;
        }
        let resRoot = new TreeNode(0);
        if(Root1) {
            resRoot.val += Root1.val;
        }
        if(Root2) {
            resRoot.val += Root2.val;
        }
        resRoot.left = dfsMergeTree(Root1.left, Root2.left);
        resRoot.right = dfsMergeTree(Root1.right, Root2.right);
        return resRoot;
    }
    return dfsMergeTree(root1, root2);
};
```