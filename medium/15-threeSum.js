/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 给你一个包含 n 个整数的数组 nums
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 第一反应， 排序 双指针， 类似maxArea

// [-4, -1, -1, 0 , 1, 2]
//	^    L 			   R   -1 + 2 + -4 < 0， 要右移，尽可能增大和
//  ^		 L         R   continue了
//  ^			L 	   R   0 + 2 + -4 < 0 右移动
//  ^ 				L  R   1 + 2 + -4 < 0 移不动了

//    	 ^   L 		   R   -1 + -1 + 2 = 0 record
// 		 ^      L 	   R   -1 + 0 + 2 > 0 左移
//       ^  	L   R 	   -1 + 0 + 1 = 0 record
// …… 依次类推


var threeSum = function(nums) {
	let resultArr = [];
	let L, R;
	nums = nums.sort((a, b) => {return a - b});
	for (let i = 0; i < nums.length; i++) {
		L = i + 1; R = nums.length - 1;
		if(nums[i] > 0) break ; // 因为已经排过序，如果i大于0了， 后续也必定大于0
		// 以下去重是 防 类似 [-4, -1, -1, 0, 3] 的情况~
		if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
		while(L < R) {
			if(nums[L] + nums[R] + nums[i] < 0) {
				L++;
			} else if (nums[L] + nums[R] + nums[i] > 0) {
				R--;
			} else if (nums[L] + nums[R] + nums[i] === 0) {
				let unitArr = [nums[L], nums[i], nums[R]];
				resultArr.push(unitArr);
				// 以下两个去重是防 类似  [-3, 1, 1, 2, 2]的情况
				while (L<R && nums[L] === nums[L+1]) L++; // 去重
                while (L<R && nums[R] === nums[R-1]) R--; // 去重
				L++;
                R--;
			}
		}
	}
	return resultArr;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))