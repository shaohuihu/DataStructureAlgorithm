

/**
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */




//思路:用2个队列
var MaxQueue = function() {

    this.queue = [];
    this.queue_max = []; //记录最大值的单调队列
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.queue_max.length <= 0) return -1;
    return this.queue_max[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    

    this.queue.push(value);

    while(this.queue_max.length > 0 && this.queue_max[this.queue_max.length - 1] < value){
        this.queue_max.pop();
    }
    this.queue_max.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {

    if(this.queue.length <= 0) return -1;

    let head = this.queue.shift();

    //判断最大值队列是否需要出队
    if (head === this.queue_max[0]){
        this.queue_max.shift();//队头出队
    }

    return head;

};

// Your MaxQueue object will be instantiated and called as such:
var obj = new MaxQueue()
obj.push_back(1)
obj.push_back(2)
console.log(obj.max_value());

obj.pop_front();




console.log(obj.max_value());
obj.pop_front()
console.log(obj.max_value());






