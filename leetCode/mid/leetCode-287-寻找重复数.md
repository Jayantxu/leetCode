*原题链接：👉：[寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/description/)*

题目描述:

给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。

思路：

> 不修改数组，常量级空间.; 无法用常规方法，看了题解，wowow，转换为环链表，求入环的节点🙌还是我太笨..

```
var findDuplicate = function(nums) {
    // 题解，转换为链表求环的节点
    let fastArr = 0,
        slowArr = 0;
    while(true) {
        slowArr = nums[slowArr];
        fastArr = nums[nums[fastArr]];
        if(fastArr === slowArr) {
            fastArr = 0;
            while(true) {
                if(fastArr === slowArr) {
                    return slowArr;
                }
                slowArr = nums[slowArr];
                fastArr = nums[fastArr];
            }
        }
    }
};
```