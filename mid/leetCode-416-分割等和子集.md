*原题链接：👉：[分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/description/)*

题目描述:

1. 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1：
```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

示例 2：
```
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

思路：

- 题解

> 动态规划

[分割等和子集(0-1背包)](https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/fen-ge-deng-he-zi-ji-0-1bei-bao-by-xing-guang-29/)

```
var canPartition = function(nums) {
    // #https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/fen-ge-deng-he-zi-ji-0-1bei-bao-by-xing-guang-29/
    let sum = 0;
    sum = nums.reduce((p, c) => {
        return p+c;
    });
    // 如果是奇数，除2，一定不会整，因此，没法对半分
    if(sum % 2 !== 0) return false;
    // ✨ 两个子集和相等，意思即：找出一些数，和等于数组和的一半
    sum /= 2;
    let nLen = nums.length;

    // 初始化dp数组
    let dp = [];
    for(let i = 0; i < nLen + 1; i++) {
        dp[i] = [];
        for(let j = 0; j < sum + 1; j++) {
            // dp[..][0] = true，背包容量为0，相当于装满了
            // dp[0][..] = false，没有物品了，相当于没法装满了
            dp[i][j] = j === 0 ? true : false;
        }
    }

    // 动态规划
    for(let i = 1; i < nLen + 1; i++) {
        for(let j = 1; j < sum + 1; j++) {
            // 如果当前背包的值nums[i - 1]已经大于目标j，那么就不可能往背包里放
            if(j - nums[i - 1] < 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                // = dp[i - 1][j]的时候，是不选的时候
                // = dp[i - 1][j - nums[i-1]]是选择了的时候
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }

    return dp[nLen][sum];

};
```