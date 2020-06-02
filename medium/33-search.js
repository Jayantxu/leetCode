/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
你可以假设数组中不存在重复的元素。
你的算法时间复杂度必须是 O(log n) 级别。
*/

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

/*
	 0		1		2		3		4		5		6
	 4	 	5	 	6	 	7	 	0	 	1	 	2
	low											   high
						   mid								(high - 0) / 2
*/




// 其实就是在数组中寻找到 目标值 与 目标值索引

// 题解思路：O(log n)  ->  二分法
// 第一步，先确定是在两个递增区间中的哪一个
// 第二步，二分法
/*
target = 5;
	0			1			2			3			4			5			6
	4			5			6			7			0			1			2
①  low								   mid								   high      mid = (high - low) / 2 = 3
先确定哪一个区间
mid => 7    high => 2   low => 4    7 > 4 / 7 > 2  ==>   所以  high => mid


②  low 				 	   mid		   high	     mid = ( high - low ) / 2 =>  2

mid => 6	high => 7 	low => 4	6 > target  > low  ==>  所以  high => mid

③  low		   mid		   high		mid = ( high - low ) / 2 => 1

mid => 5	high => 6 	low => 4	mid = target;

index => 1
*/

var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        //target 不在 [start, mid] 之间
        start = mid + 1;
      }
    } else {
      // [mid, end]有序

      // target 在 [mid, end] 之间
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        // target 不在 [mid, end] 之间
        end = mid - 1;
      }
    }
  }

  return -1;
};
console.log(search([4,5,6,7,0,1,2], 5));
console.log(search([4,5,6,7,0,1,2], 0));
