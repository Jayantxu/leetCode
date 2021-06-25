*原题链接：👉：[乘积最大子数组](https://leetcode-cn.com/problems/maximum-product-subarray/description/)*

题目描述:

1. 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

示例：

```
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

```
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

思路：
> 

```
var maxProduct = function(nums) {
    let res = 0,
        minVal = 0,
        maxVal = 0;
    if(nums.length === 1) return nums[0];
    for(let i = 0; i < nums.length; i++) {
        let tmpMin = minVal;
        minVal = Math.min(nums[i], Math.min(nums[i] * minVal, maxVal * nums[i]));
        maxVal = Math.max(nums[i], Math.max(nums[i] * tmpMin, maxVal * nums[i]));
        res = Math.max(res, maxVal);
    }
    return res;
};
```