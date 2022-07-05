/**
 * https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    //取出最早的元素  先把stack1的元素
    if(this.stack1.length === 0) return -1;
    

    //这里说明元素大于1
    while(this.stack1.length > 1){
        this.stack2.push(this.stack1.pop());
    }

    let delete_value = this.stack1.pop(); //弹出栈底的那个元素,并记录需要返回

    // 将stack2中的元素还原回来
    while(this.stack2.length > 0){
        this.stack1.push(this.stack2.pop());
    }

    return delete_value;



};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

 var obj = new CQueue();
 obj.appendTail(123);
 obj.appendTail(1456);
 
 var res = obj.deleteHead();
 console.log(res);


 res = obj.deleteHead();
 console.log(res);

 res = obj.deleteHead();
 console.log(res);
