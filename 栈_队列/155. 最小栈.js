
/**
 * https://leetcode.cn/problems/min-stack/
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 */
// var MinStack = function() {

//     this.stack = []; //正常栈
//     this.minstack = []; //最小栈
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {

//     this.stack.push(val);
//     if (this.minstack.length === 0) {
//         this.minstack.push(val);
//     } else {
//         this.minstack.push(Math.min(val, this.minstack[this.minstack.length - 1]));
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {

//      this.stack.pop();
//      this.minstack.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.minstack[this.minstack.length - 1];
// };



// 也可以用链表解决

function ListNode(val, next, min) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.min = (min===undefined ? 0 : min)
}


var MinStack = function() {
    this.head = new ListNode(0, null, Number.MAX_VALUE)
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.head = new ListNode(val, this.head, Math.min(val,this.head.min))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min;
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
