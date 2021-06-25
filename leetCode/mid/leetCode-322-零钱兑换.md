*原题链接：👉：[零钱兑换](https://leetcode-cn.com/problems/coin-change/description/)*

题目描述:

1. 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

2. 你可以认为每种硬币的数量是无限的。

示例：

```
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```
```
输入：coins = [2], amount = 3
输出：-1
```

思路：

> 动态规划

```
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if(coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
```