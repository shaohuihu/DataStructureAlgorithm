
/** https://leetcode.cn/problems/valid-parentheses/
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。


 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let statck1 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            statck1.push(s[i]);
        } else {

            if(statck1.length === 0) return false; //这时栈如果为空，说明右括号多，非法
            
            let left = statck1.pop();

            if(s[i] === ")" && left !== "(") return false;
            if(s[i] === "]" && left !== "[") return false;
            if(s[i] === "}" && left !== "{") return false;
        }   
    }


    //如果匹配完成，栈为空
    return statck1.length === 0;


};

s = "(([)])";
let res = isValid(s);
console.log(res);


