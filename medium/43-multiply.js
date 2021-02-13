/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 说明：

// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。


const multiply = (num1, num2) => {
  const len1 = num1.length;
  const len2 = num2.length;
  const pos = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    const n1 = +num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      const n2 = +num2[j];
      const multi = n1 * n2;             
      const sum = pos[i + j + 1] + multi; 

      pos[i + j + 1] = sum % 10;
      pos[i + j] += sum / 10 | 0;
    }
  }
  while (pos[0] == 0) {
    pos.shift();
  }
  return pos.length ? pos.join('') : '0';
};




/**关键一步在于
两数相乘，乘积位一定 <= 两数位数之和, 所以确定数组长度
const pos = new Array(len1 + len2).fill(0);    
pos[i + j + 1]
*/


// let multiply = (num1, num2) => {
//   const len1 = num1.length;
//   const len2 = num2.length; debugger;
//   const pos = new Array(len1 + len2).fill(0);

//   for (let i = len1 - 1; i >= 0; i--) {
//     const n1 = +num1[i];
//     for (let j = len2 - 1; j >= 0; j--) {
//       const n2 = +num2[j];
//       const multi = n1 * n2;             
//       const sum = pos[i + j + 1] + multi; 

//       pos[i + j + 1] = sum % 10;
//       pos[i + j] += sum / 10 | 0;
//       console.log('----- 运算 -----');
//       console.log(`i:${i}; 取位:${n1}`);
//       console.log(`j:${j}; 取位:${n2}`);
//       console.log(`multi:${multi}`);
//       console.log('占位:' + (i + j));
//       console.log('占位:' + (i + j + 1));
//       console.log(`当前pos:${pos}`)
//     }
//   }
//   while (pos[0] == 0) {
//     pos.shift();
//   }
//   return pos.length ? pos.join('') : '0';
// };