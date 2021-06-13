*原题链接：👉：[和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/description/)*

题目描述:

1. 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1：

```
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```

思路：

> 暴力，超时了

```
var subarraySum = function(nums, k) {
    let kNum = 0;
    for(let i = 0; i < nums.length; i++) {
        let everySum = 0;
        for(let j = i; j < nums.length; j++) {
            everySum += nums[j];
            if(everySum === k) {
                kNum+=1;
            }
        }
    }
    return kNum;
};
```

> 前缀和，看题解的思路的。将前面每一位的和保存起来，做好和与数量的映射，当后面的元素计算`total-k`，在前面可以找到匹配时，那么就表示情况`+1`。

**code**

```
var subarraySum = function(nums, k) {
    let numCount = 0;
    let countMap = new Map();
    countMap.set(0, 1); // 差为0的时候，数量可+1
    let total = 0;
    for(let num of nums) {
        total += num;
        if(countMap.has(total - k)) {
            numCount += countMap.get(total - k);1
        }
        if(countMap.has(total)) {
            countMap.set(total, countMap.get(total) + 1);
        } else {
            countMap.set(total, 1);
        }
    }
    return numCount;
};
```