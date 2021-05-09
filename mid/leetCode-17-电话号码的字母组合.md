
*原题链接：👉：[电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)*

题目描述:

1. 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
2. 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例：
```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

思路：
> 排列组合？像是最近遇到的一个问题，商品SKU问题。

```
var letterCombinations = function(digits) {
    let digitsNum = digits.split('');
    let res = [];
    if(!digitsNum.length ) {
        return res;
    }
    let digObj = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q','r', 's'],
        '8': ['t','u','v'],
        '9': ['w', 'x', 'y', 'z']
    }
    const dfsFunc = (str, idx) => {
        if(idx >= digitsNum.length ) {
            res.push(str);
            return;
        }
        let digStr = digitsNum[idx];
        let digStrObj = digObj[digStr];
        for(let i = 0; i < digStrObj.length; i++) {
            dfsFunc(str + digStrObj[i], idx + 1);
        }
    }
    dfsFunc('', 0);
    return res;
};
```

