

/**
 * https://leetcode.cn/problems/implement-stack-using-queues/
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 * void push(int x) 将元素 x 压入栈顶。
 * int pop() 移除并返回栈顶元素。
 * int top() 返回栈顶元素。
 * boolean empty() 如果栈是空的，返回 true ；否则，返回 false

 */




var MyStack = function() {

    //为了用数组模拟队列，当前数组只能用push 和shift 操作，不能用pop
    this.queue1 = [];  
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.empty()) return -1; //栈为空


    while(this.queue1.length > 1){
        this.queue2.push(this.queue1.shift()); 
    }

    let pop_value = this.queue1.shift();

    while(this.queue2.length > 0){
        this.queue1.push(this.queue2.shift()); 
    }

    return pop_value;

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {

    //查看栈顶元素

    if(this.empty()) return -1; //栈为空


    while(this.queue1.length > 1){
        this.queue2.push(this.queue1.shift()); 
    }

    let pop_value = this.queue1.shift();

    this.queue2.push(pop_value); //将这个元素还原

    while(this.queue2.length > 0){
        this.queue1.push(this.queue2.shift()); 
    }

    return pop_value;


};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};


var obj = new MyStack()
obj.push(123);
obj.push(456);
var param_2 = obj.pop()
obj.pop();
var param_3 = obj.top()
var param_4 = obj.empty()

console.log(param_2,param_3,param_4);