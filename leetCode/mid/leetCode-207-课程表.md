*原题链接：👉：[课程表](https://leetcode-cn.com/problems/course-schedule/description/)*

题目描述:

1. 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

示例：
```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

```
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

思路：

> 没想到，看了题解大佬的代码，chrome devtool debugger 跟一遍...

```
let canFinish = (numCourses, prerequisites) => {
    //  选择一个数组构建一个学习课程的数组
    const inDegree = new Array(numCourses).fill(0);
    const map = {}; 
    // 遍历课程表
    for (let i = 0; i < prerequisites.length; i++) {
        // 如果此课程出现了，则记录课程前置课程数，因为不重复，出现次数即为前置的课程数
        if(!inDegree[prerequisites[i][0]]) {
            inDegree[prerequisites[i][0]] = 0
        }
        inDegree[prerequisites[i][0]]++;
        // 创建一个对象，保存前置课程所影响的课程数组 ①
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0]);
        } else {                     
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }
    const queue = [];
    // 先遍历一遍，目前哪些课程是可以直接学习了的
    for (let i = 0; i < inDegree.length; i++) {
        // 记录学习的课程索引  push(i)
        if (inDegree[i] == 0) queue.push(i);
    }

    let count = 0;
    // 依次推出课程，获取前置课程中能影响到的课程数组  注①
    while (queue.length) {
        const selected = queue.shift();
        count++;   
        const toEnQueue = map[selected];
        // 遍历课程，结一门减1，为0了即可以影响后续课程了。
        if (toEnQueue && toEnQueue.length) { 
            for (let i = 0; i < toEnQueue.length; i++) {
                inDegree[toEnQueue[i]]--;            
                if (inDegree[toEnQueue[i]] == 0) {   
                    queue.push(toEnQueue[i]);
                }
            }
        }
    }
    return count >= numCourses;
};
```