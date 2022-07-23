
/**
 * https://leetcode.cn/problems/sort-of-stacks-lcci/
 * 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，
 * 但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。
 * 当栈为空时，peek 返回 -1。
 * 
 */

var SortedStack = function() {
    this.stack = [];
    this.tmp = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {


    //每次push的时候都要比较

    //如果为空直接push
    if (this.isEmpty()) {
        this.stack.push(val);
        return;
    }

    //如果不为空进行比较
    while (!this.isEmpty() && (this.peek() < val)) {
        this.tmp.push(this.pop());
    }

    //把较大的元素入栈
    this.stack.push(val);


    //把小的的元素入栈
    while (this.tmp.length > 0) {
        this.stack.push(this.tmp.pop());
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    if (this.isEmpty()) return -1;
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};



var obj = new SortedStack()
obj.push(5)
obj.push(10)
obj.push(100)
var param_3 = obj.peek()
var param_4 = obj.isEmpty()
console.log(param_3,param_4);


/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */

