*原题链接：👉：[打家劫舍Ⅲ](https://leetcode-cn.com/problems/house-robber-iii/description/)*

题目描述:


1. 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

2. 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例：

```
输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
```
```
输入: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
```

思路：

- 题解

[非常棒的题解](https://leetcode-cn.com/problems/house-robber-iii/solution/san-chong-fang-fa-jie-jue-shu-xing-dong-tai-gui-hu/)

> 动态规划，从暴力开始演进

1. 暴力递归（超时了）
`Time Limit Exceeded 122/124 cases passed (N/A)`

单个节点的最多钱怎么偷？以三层的树结构举例：

```
      3
    /   \
   4     5
  / \   / \ 
 1   3 1   1
```
偷爷爷节点，那么两个儿子的钱就不能偷，再偷孙子的钱、或者只偷两儿子的钱。

①、两儿子的钱：`rob(root.left) + rob(root.right)`
②、偷爷爷与孙子的钱：`root.val + rob(root.left.left) + rob(root.left.right) + rob(root.right.left) + rob(root.right.right)`

至于应该怎么偷，偷哪种，那就取决与谁的钱多。

③、`return Math.max(①， ②)`

**code**
```
var rob = function(root) {
    // 暴力法
    if(!root) return 0;
    let rootVal = root.val;
    if(root.left != null) {
        rootVal += (rob(root.left.left) + rob(root.left.right));
    }
    if(root.right != null) {
        rootVal += (rob(root.right.left) + rob(root.right.right));
    }
    return Math.max(rootVal, (rob(root.left) + rob(root.right)));
};
```



2. 记忆化暴力

如果树的节点层级高且多，以四层的为例子，遍历到儿子节点的时候，儿子节点做为爷爷，那么曾经的孙子节点将会成为儿子节点，但是这个儿子（孙子）节点是曾经遍历过的，因此如果可以将它的值作为记录，就不必重复运算了。

JS中`Map`可以存储将复杂的数据结构作为`key`那么用`map`存储，很合适。

**code**

```
var rob = function(ROOT) {
    let rootValMap = new Map();
    const dfsRootVal = (root) => {
        if(!root) return 0;
        if(rootValMap.has(root)) return rootValMap.get(root);
        let rootVal = root.val;
        if(root.left != null) {
            rootVal += (rob(root.left.left) + rob(root.left.right));
        }
        if(root.right != null) {
            rootVal += (rob(root.right.left) + rob(root.right.right));
        }
        let resVal = Math.max(rootVal, (rob(root.left) + rob(root.right)));
        rootValMap.set(root, resVal);
        return resVal;
    }; 
    let val = dfsRootVal(ROOT);
    return val;
};
```


3. 动态规划

我们创造一个数组记录每个节点的偷取状态，
`[0, 1]`，`0`为不偷的情况，`1`为偷取的情况，最终也只是比较`0`及`1`的大小关系。

偷的跨层还是和记忆化的分析一致，偷爷爷孙子，或者偷儿子。

**code**

```
var rob = function(ROOT) {
    // 0为不偷的情况
    // 1为偷的情况
    const dfsRootVal = (root) => {
        if(!root) return [0, 0];

        
        // 以下不严谨❌
        // let resArr = new Array(2).fill(0);
        // 一样是取left,right，没必要执行那么多次dfsRootVal(root.left)、dfsRootVal(root.right)
        //resArr[0] = Math.max(
        //    dfsRootVal(root.left)[0],
        //    dfsRootVal(root.left)[1]
        //) + Math.max(
        //    dfsRootVal(root.right)[0],
        //    dfsRootVal(root.right)[1]
        //);
        //resArr[1] = dfsRootVal(root.left)[0] + dfsRootVal(root.//right)[0] + root.val;

        let left = dfsRootVal(root.left);
        let right = dfsRootVal(root.right);

        let it1 = Math.max(
            left[0],
            left[1]
        ) + Math.max(
            right[0],
            right[1]
        );
        let it2 = right[0] + left[0] + root.val;
 
        return [it1, it2];
    }; 
    let res = dfsRootVal(ROOT);
    return Math.max(res[0], res[1]);
};
```

