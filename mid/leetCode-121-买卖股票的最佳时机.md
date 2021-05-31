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

> 单调栈，我们依次遍历，维护一个递增的栈，栈底就一定是最低值，有点像那两题求柱形面积的题。

```
```