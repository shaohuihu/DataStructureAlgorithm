/**
 * 
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 思路1: 用双端队列，保证队列从队头到队尾单调递减 
// 思路2: 遍历
var maxSlidingWindow = function(nums, k) {

    let deque = [];//新建一个双端队列,存放索引
    let result = []; //结果数组

    for (let ri = 0; ri < nums.length; ri++) {
        
        let li = ri - k + 1; //确定左边界位置
        
        while (deque.length > 0 && nums[ri] >= nums[deque[deque.length - 1]]) {
            //如果当前数比队尾的数据要大，则将队尾出队
            deque.pop();
        }
        deque.push(ri); //单调递减

    
        if (li >= 0) {
            //查看队头是否过期
            if (deque[0] < li) {
                deque.shift();
            }
            //说明li 开始合法，则需要记录当前结果的最大值
            result[li] = nums[deque[0]];//队头就是最大值
            
        }
    } 
    return result;
};



var maxSlidingWindow1= function(nums, k) {

    let result = []; //结果数组
    
    for (let ri = 0; ri < nums.length; ri++) {
        let maxIndex = ri;
        for (let i = ri + 1 ; i < ri + k - 1; i++) {
            if (nums[maxIndex] <= nums[i]) maxIndex = i; 
        }
        

    } 
    return result;
};


let  nums = [1, 3, -1, -3, 5, 3, 6, 7];
let  k = 3;
let res = maxSlidingWindow(nums,k);
console.log(res);
