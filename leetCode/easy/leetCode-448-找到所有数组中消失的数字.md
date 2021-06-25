*原题链接：👉：[找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/)*

题目描述:

给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。


示例：
```
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]
```

```
输入：nums = [1,1]
输出：[2]
```

思路：

```
var findDisappearedNumbers = function(nums) {
    let resArr = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(i + 1) === -1) {
            resArr.push(i + 1);
        }
    }
    return resArr;
};
```

- 题解

在题解看到一个思路，两次遍历，第一次交换对应的数至目标位置，第二次遍历判断不在数组中的数字。

```
var findDisappearedNumbers = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == i + 1) {
            i++;
            continue;
        }
        const idealIdx = nums[i] - 1;
        if (nums[i] == nums[idealIdx]) {
            i++;
            continue;
        }
        [nums[idealIdx], nums[i]] = [nums[i], nums[idealIdx]];
    }
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {        
            res.push(i+1);
        }   
    }
    return res;
};
```