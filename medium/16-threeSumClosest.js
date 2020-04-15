/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
// 找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。
// 假定每组输入只存在唯一答案。

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

// 排序 ==>  [-4, -1, 1, 2]
// 			  ^    L     R
// 
// 想不出来，看了 from 题解思路，怎么又是双指针呀  /(ㄒoㄒ)/~~，好了算是灵感

// 和 15题的差别在于  0 变成了 target
var threeSumClosest = function(nums, target) {
	nums.sort((a, b) => a - b)
	let one = null
	let lastOne = null
	let result = Infinity
	for (let i = 0; i < nums.length - 2; i++) {
		one = nums[i]
		if (one === lastOne) continue
		lastOne = one
		let m = i + 1, n = nums.length - 1

		while (m < n) {
		  let sum = one + nums[m] + nums[n]
		  if (sum === target) return target // 如果求出的和等于 目标值  直接返回了
		  if (Math.abs(result - target) > Math.abs(sum - target)) {
		    result = sum;
		  }
		  if (sum > target) n--
		  else m++
		}

	}
	return result
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
