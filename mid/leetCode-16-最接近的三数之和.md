
*原题链接：👉：[最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/)*

题目描述:

1. 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
2. 返回这三个数的和。假定每组输入只存在唯一答案。


示例：
```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)
```

思路：
> 魔改`15`题即可，一个是0，一个是`target`，每次都比较保留下最接近的值。

- 大意了，暴力了...
 
```
var threeSumClosest = function(nums, target) {
    let res = [];
	let sumRecord;
	let recordSum;
	let numLen = nums.length;
	for(let iKey = 0; iKey < numLen - 2;  iKey++) {
		let R = numLen - 1;
		while(R - 1 > iKey) {
			let L = iKey + 1;
			while(L < R) {
				let sum = Math.abs(target - (nums[iKey] + nums[L] + nums[R]));
				if(!sumRecord && sumRecord !== 0) {
					sumRecord = sum;
					recordSum = (nums[iKey] + nums[L] + nums[R]);
				}
				if(sum < sumRecord) {
					sumRecord = sum;
					recordSum = (nums[iKey] + nums[L] + nums[R]);
				}
				L++;
			}
			R--;
		}
	}
	return recordSum;
};
```

- 优化

```
var threeSumClosest = function(nums, target) {
    let res = nums[0] + nums[1] + nums[2];
    let numLen = nums.length;
    nums.sort((a, b) => return a - b);
	for(let iKey = 0; iKey <= numLen - 2;  iKey++) {
        let L = iKey + 1,
            R = numLen - 1;
        while(L < R) {
            let sum = nums[iKey] + nums[L] + nums[R];
            if(Math.abs(target - res) > Math.abs(target - sum)) 
                res = sum;
            if(sum > target){
                R--;
            } else if(sum < target) {
                L++;
            } else {
                return res;
            }
        }
	}
	return res;
};
```
