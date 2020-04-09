/**
 * @param {number[]} height
 * @return {number}
 */

// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。
//      1   8   6   2   5   4   8   3   7
// 10  [0] [0] [0] [0] [0] [0] [0] [0] [0]
// 9   [0] [0] [0] [0] [0] [0] [0] [0] [0]
// 8   [0] [1] [0] [0] [0] [0] [1] [0] [0]
// 7   [0] [1] [0] [0] [0] [0] [1] [0] [1]
// 6   [0] [1] [1] [0] [0] [0] [1] [0] [1]
// 5   [0] [1] [1] [0] [1] [0] [1] [0] [1]
// 4   [0] [1] [1] [0] [1] [1] [1] [0] [1]
// 3   [0] [1] [1] [0] [1] [1] [1] [1] [1]
// 2   [0] [1] [1] [1] [1] [1] [1] [1] [1]
// 1   [1] [1] [1] [1] [1] [1] [1] [1] [1]
// 0	1	2	3	4	5	6	7	8	9


// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

// ① 双指针法，移动高度小的指针  from  题解
// 假设1：移动两个指针高度较高的，下一个指针高度高于四边形高度，宽度减小，四边形高度不变，面积值减小
// 假设2：移动两个指针高度较高的，下一个指针高度低于四边形高度，宽度减小，高度减小，面积值依旧减小
// 假设3：移动两个指针高度较低的，下一个指针高度高于四边形高度，宽度减小，高度增加，面积值可能增加
// 假设4：移动两个指针高度较低的，下一个指针高度低于四边形高度，宽度减小，高度减小，面积值减小

var maxArea = function(height) {
	let max = 0;
	let i = 0, j = height.length - 1;
	let unitArea = 0;
	while(j >= i + 1) {
		unitArea = Math.abs(j - i) * Math.min(height[j], height[i]);
		if (height[j] > height[i]) {
			i++;
		} else {
			j--;
		}
		max = max > unitArea ? max : unitArea;
	}
	return max;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// // ② 暴力破解，一一遍历肯定是可解的 from 自己
// var maxArea = function(height) {
// 	let recordMax = 0;
// 	let bottonSize = 0;
// 	let lowUnit = 0;
// 	for(let i = 0; i < height.length; i++) {
// 		for (let j = 0; j < height.length; j++) {
// 			if(i === j) {
// 				continue;
// 			}
// 			bottonSize = Math.abs(j - i);
// 			lowUnit = Math.min(height[j], height[i]);
// 			recordMax = recordMax < (bottonSize * lowUnit) ? (bottonSize * lowUnit) : recordMax;
// 		}
// 	}
// 	return recordMax;
// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));