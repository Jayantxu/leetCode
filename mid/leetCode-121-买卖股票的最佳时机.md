*原题链接：👉：[买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/)*

题目描述:

1. 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
2. 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
3. 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

注意:
你可以假设树中没有重复的元素。

示例：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

思路： 
> 暴力解，遍历每一天，假设买入，再遍历后续的每一天都假设是卖出天，取最大值。

```
var maxProfit = function(prices) {
    let maxIncome = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        let inPrices = prices[i];
        for(let j = i + 1; j < prices.length; j++) {
            let outPrices = prices[j];
            // if(outPrices - inPrices > maxIncome ) maxIncome = outPrices - inPrices;
            maxIncome = Math.max(maxIncome, outPrices - inPrices);
        }
    }
    return maxIncome;
};
```

但是，暴力还是不太可取，毕竟会超时⏰
最大利润，就是这个价格数组中的最大最小价格的差。因此我们遍历一遍做下记录

```
var maxProfit = function(prices) {
    let minPrices = prices[0];
    let maxIncome = 0;
    for(let i = 0; i < prices.length; i++) {
        let nowVal = prices[i];
        if(nowVal < minPrices) {
            minPrices = nowVal;
        } 
        if(prices[i] - minPrices > maxIncome) {
            maxIncome = prices[i] - minPrices;
        }
    }
    return maxIncome;
};
```

- 题解

👏看了题解还可以使用动态规划的方法进行解答，学习记录一下。

dp[i]：前`i`天卖出的最大利润
min：`prices`中前`i`项中的最小值
prices[i] - min：当前位置卖出可得的最大利润
dp[i - 1]：前`i - 1`项目卖出可得的最大利润

即：今天的最大利润要吗是昨天卖出时获得的最大利润，要么是今天卖出
```
dp[i] = Math.max( dp[i - 1], prices[i] - min )
```

**code**

```
var maxProfit = function(prices) {
    if(!prices.length) {
        return;
    }
    let minPrices = prices[0];
    let dp = new Array(prices.length).fill(0);
    dp[0] = 0;
    for(let i = 1; i < prices.length; i++) {
        minPrices = Math.min(minPrices, prices[i]);
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrices);
    }
    return dp[prices.length - 1];
};
```