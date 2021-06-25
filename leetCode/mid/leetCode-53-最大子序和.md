*原题链接：👉：[最大子序和](https://leetcode-cn.com/problems/maximum-subarray/description/)*

题目描述:

1. 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

示例：
```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```
```
输入：nums = [1]
输出：1
```

思路：
> 滑动窗口？好像也不是...怎么判断窗口临界条件...

- 题解

😂动态规划，我还以为easy啥的不会有，大意了。。

他只要返回和，并不需要返回最大和的子数组。

so: `f(i) = max{f(i - 1) + nums[i], nums[i]}`，这个是转移方程。

并且由于是取最大，和是有累加效果的。

```
var maxSubArray = function(nums) {
    let maxAns = nums[0];
    let preSum = 0; // f(i - 1) 的和
    for(let i of nums) {
        preSum = Math.max(preSum + i, i);
        maxAns = Math.max(preSum, maxAns);
    }
    return maxAns;
};
```
🌟🌟🌟

想了一下，如果说有一道题，需要寻找最大和的连续子数据，并且返回该数组，那又应该怎么处理呢。

我的想法是：
> 建立一个变量标识，在记录更新`maxAns`时候顺便更新此`flag`标识，`flag`记录为当前元素下标。
寻找出最大和之后，从这个下标开始，往回计算，`push`进一个数组，知道和减为0，那么这个数组应该就是这个和的数组。


🐱‍🏍🐱‍🏍🐱‍🏍真会自娱自乐..









