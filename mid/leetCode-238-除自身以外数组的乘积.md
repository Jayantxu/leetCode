*原题链接：👉：[除自身以外数组的乘积](https://leetcode-cn.com/problems/product-of-array-except-self/description/)*

题目描述:

给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

思路：

> 题目如果单纯做并不难，遍历遍历，除了就好，但是说明那么醒目的大字，不能用除法，那一下就不知道怎么想了。

- 题解

> 两次遍历，正向反向。
[leetCode题解](https://leetcode-cn.com/problems/product-of-array-except-self/solution/chu-zi-shen-yi-wai-shu-zu-de-cheng-ji-by-leetcode-/)

例子：`[1,2,3,4]`

我们先正向一遍，正向积累前面数字的乘积:

```
    [1, 2, 3, 4]
=>
    [1, 1, 1*2, 1*2*3]
```

之后再逆向一遍，积累后面数字的乘积:
```
    [1, 2, 3, 4]
=>
    [2*3*4, 3*4, 4, 4]
```

然后再对两者进行相乘：
```
    [1, 1, 1*2, 1*2*3]
*   [2*3*4, 3*4, 4, 4]
```

太巧妙了

**code**

```
var productExceptSelf = function(nums) {
    let resArr = [1];
    let resArrR = [];
    resArrR[nums.length - 1] = 1;
    for(let i = 1; i < nums.length; i++) {
        resArr[i] = resArr[i - 1] * nums[i - 1];
    }
    for(let j = nums.length - 2; j >= 0; j--) {
        resArrR[j] = resArrR[j + 1] * nums[j + 1];
    }
    for(let i = 0; i < resArr.length; i++) {
        resArr[i] = resArrR[i] * resArr[i];
    }
    return resArr;
};
```