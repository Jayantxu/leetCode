
*原题链接：👉：[三数之和](https://leetcode-cn.com/problems/3sum/)*

题目描述:

1. 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
2. 注意：答案中不可以包含重复的三元组。


示例：
```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

```
输入：nums = []
输出：[]
```
思路：

> `nums.length < 3`时候不存在；
> 可以先排序，如果`idx=0`时`>0`那么就不存在，或者`idx=len - 1`时`<0`时也不存在；
> `a + b + c = 0`其实就是`a + b = -c`；

<!-- 
[-4, -1, -1, 0, 1, 2]
 -->


 ```
var threeSum = function(nums) {
	let res = [];
	if(nums.length < 3) {
		return res;
	}
	let numLen = nums.length;
	nums.sort((a, b) => {return a - b});
	if(nums[0] > 0) return res;
	if(nums[numLen - 1] < 0) return res;
	for(let iKey = 0; iKey < numLen - 2;  iKey++) {
		if(nums[iKey] > 0) break;
		if(iKey >= 1 && nums[iKey] === nums[iKey - 1]) continue
		let L = iKey + 1;
		let R = numLen - 1;
		while(L < R) {
			let sumNum = nums[iKey] + nums[L] + nums[R]; // 三数之和
			if(sumNum === 0) {
				res.push([nums[iKey], nums[L], nums[R]]);
				while(R > L && nums[L + 1] === nums[L]) L++;
				while(R > L && nums[R - 1] === nums[R]) R--;
                // 注意此处 L++,R--, 会陷入循环, 以[-1, -1, 0, 1]为例子可调试查看
				L++;
				R--;
			} else if (sumNum > 0) {
				R -= 1;
			} else if (sumNum < 0) {
				L += 1;
			}
		}
	}
	return res;
}
 ```