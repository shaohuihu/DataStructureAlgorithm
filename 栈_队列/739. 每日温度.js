
/**
 * 
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/daily-temperatures
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} temperatures
 * @return {number[]}
 */

//思路：利用单调栈，栈从栈底到栈顶单调递减
 var dailyTemperatures = function(temperatures) {

    let result = [];
    let stack = [];
    for (let index = 0; index < temperatures.length; index++) {
        result[index] = 0; //初始化
       // const element = temperatures[index];
        while(stack.length > 0 && temperatures[index] > temperatures[stack[stack.length - 1]]){
            //栈顶比要遍历的数据小,需要出栈，并且设置下，要出栈的数据的右边第一个比大的数就是即将要入栈的
            //栈里面存索引
            let pop = stack.pop();
            result[pop] = index - pop;
        }
        stack.push(index);
    }

    return result;
};

let res = dailyTemperatures([73,74,75,71,69,72,76,73])
console.log(res);

