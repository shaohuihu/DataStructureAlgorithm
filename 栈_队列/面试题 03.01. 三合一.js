
/**
 * 
 * @param 
 * {三合一。描述如何只用一个数组来实现三个栈。

你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。
stackNum表示栈下标，value表示压入的值。

构造函数会传入一个stackSize参数，代表每个栈的大小。

} stackSize 
 */

// 用一个数组容纳三个栈，每个栈的标号为stackNum，然后进行相应的操作和判断 
// 只要获取到每个栈的begin 和 end 然后操作这个数据模拟栈
/**
 * @param {number} stackSize
 */
 var TripleInOne = function(stackSize) {
    this.list = new Array(3 * stackSize);
};

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {


    //找到数组中的实际索引 begin 和 end  从 begin 开始存放   end如果有值，说明栈满
    let begin_index = this.getBegin(stackNum);
    let end_index = this.getEnd(stackNum);

    if(this.list[end_index] !== undefined) return; //栈满


    //将数据放入合适的位置
    for(let i = begin_index;i <= end_index;i++){
        if(this.list[i] === undefined){
            this.list[i] = value;
            break;
        }
    }

    
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {

    if(this.isEmpty(stackNum)) return -1;

    let begin_index = this.getBegin(stackNum);
    let end_index = this.getEnd(stackNum);
    


    let pop_value;

    //从end 开始遍历，不为空的那个数设置成null
    for(let i = end_index;i >= begin_index;i--){
        if(this.list[i] !== undefined){
            pop_value = this.list[i]
            this.list[i] = undefined;
            break;
        }
    }

    return pop_value;
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    if(this.isEmpty(stackNum)) return -1;

    let begin_index = this.getBegin(stackNum);
    let end_index = this.getEnd(stackNum);

      //从end 开始遍历，不为空的那个数就是栈顶元素
      for(let i = end_index;i >= begin_index;i--){
        if(this.list[i] !== undefined){
           return this.list[i];
        }
    }

    return -1;

};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    let begin_index = this.getBegin(stackNum);
    if(this.list[begin_index] === undefined) return true; 
    return false;
};


//自定义两个取索引的方法
TripleInOne.prototype.getBegin = function(stackNum) {
    return stackNum * this.list.length / 3;
};
TripleInOne.prototype.getEnd = function(stackNum) {
    return (stackNum + 1) * this.list.length / 3 - 1;
};



var obj = new TripleInOne(3)
obj.push(0,1);
obj.push(0,2);
obj.push(0,3);
obj.push(0,4);

let res = obj.pop(0);

console.log(res);
console.log(obj.peek(0));

obj.push(1,100);
//obj.pop(1);

console.log(obj.peek(1),obj.isEmpty(1));


// var param_2 = obj.pop(stackNum)
// var param_3 = obj.peek(stackNum)
// var param_4 = obj.isEmpty(stackNum)




