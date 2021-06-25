
*原题链接：👉：[四数之和](https://leetcode-cn.com/problems/4sum/)*

题目描述:

1. 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
2. 注意：答案中不可以包含重复的四元组。

示例：
```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

```
输入：nums = [], target = 0
输出：[]
```

思路：
> 和`三数之和`差不多，应该加多一个指针即可吧，或者转换一下`a + b + c + d = target` => `a + b + c = target- d`;

```
var fourSum = function(nums, target) {
    let resArr = [];
    let numLen = nums.length;
    if(!numLen) {
        return resArr;
    }
    nums.sort((a, b) => {return a - b});
    if(nums[0] > target) {
        return resArr;
    }
    if(nums[numLen - 1] < target) {
        return resArr;
    }
	for(let iKey = 0; iKey < numLen - 3;  iKey++) {
        let start = iKey;
        if(nums[iKey] > target) break;
		if(nums[iKey] === nums[iKey - 1]) continue
        for(let jkey = numLen - 1; jkey > iKey + 2; jkey--) {
            if(nums[jkey] < target) break;
		    if(nums[jkey] === nums[jkey + 1]) continue
            let end = jkey;
            let L = start + 1,
                R = end - 1;
            while(L < R) {
                let sum = nums[start] + nums[end] + nums[L] + nums[R];
                if(sum === target){
                    let arr = [nums[start], nums[end], nums[L], nums[R]];
                    arr.sort((a, b) => {return a - b};)
                    resArr.push([nums[start], nums[end], nums[L], nums[R]]);
                    while(R > L && nums[L + 1] === nums[L]) L++;
				    while(R > L && nums[R - 1] === nums[R]) R--;
                    L++;
                    R--;
                } else if(sum < target) {
                    L++;
                } else if(sum > target) {
                    R--;
                }
            }
        }
	}
	return resArr;
};
```

❌❌❌

错误！有几个判断不对

```
if(nums[0] > target) {
    return resArr;
}
if(nums[numLen - 1] < target) {
    return resArr;
}

if(nums[jkey] < target) break;
if(nums[iKey] > target) break;
```

这几个判断都是不对的，后来一步一步调试才排除的，因为是**累加**，所以这些判断项都是存在可能的

例如: nums = [2, 2, 2, 2, 2], target = 8;
不能简单的`nums[numLen - 1] < target`

最终调试通过代码：

```
var fourSum = function(nums, target) {
    let resArr = [];
    let numLen = nums.length;
    if(!numLen) {
        return resArr;
    }
    nums.sort((a, b) => {return a - b});
	for(let iKey = 0; iKey < numLen - 3;  iKey++) {
        let start = iKey;
		if(nums[iKey] === nums[iKey - 1]) continue
        for(let jkey = numLen - 1; jkey > iKey + 2; jkey--) {
		    if(nums[jkey] === nums[jkey + 1]) continue
            let end = jkey;
            let L = start + 1,
                R = end - 1;
            while(L < R) {
                let sum = nums[start] + nums[end] + nums[L] + nums[R];
                if(sum === target){
                    let arr = [nums[start], nums[end], nums[L], nums[R]];
                    arr.sort((a, b) => {return a - b});
                    resArr.push(arr);
                    while(R > L && nums[L + 1] === nums[L]) L++;
				    while(R > L && nums[R - 1] === nums[R]) R--;
                    L++;
                    R--;
                } else if(sum < target) {
                    L++;
                } else if(sum > target) {
                    R--;
                }
            }
        }
	}
	return resArr;
};
```