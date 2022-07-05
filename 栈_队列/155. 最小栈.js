
/**
 * https://leetcode.cn/problems/min-stack/
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 */
var MinStack = function() {

    this.stack = [];
    this.minstack = [];
    this.tmp = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if(this.minstack.length === 0)  {
        this.minstack.push(val); 
        return;
    }

    while(this.minstack[this.minstack.length - 1] < val){
        this.tmp.push(this.minstack.pop());
    }
    this.minstack.push(val);

    while(this.tmp.length > 0){
        this.minstack.push(this.tmp.pop());
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    let value = this.stack.pop();

    //最小栈也需要找到这个元素pop出来

    while(value !== this.minstack[this.minstack.length - 1]){
        this.tmp.push(this.minstack.pop());
    }

    this.minstack.pop();

    while(this.tmp.length > 0){
        this.minstack.push(this.tmp.pop());
    }

    return value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];
};


let minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(4);
let res = minStack.getMin();  
console.log(res);

minStack.pop();
minStack.pop(); 

res = minStack.top();  
console.log(res); 

res = minStack.getMin();  
console.log(res); 
