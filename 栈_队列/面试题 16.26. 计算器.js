/** 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/calculator-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {number}
 */

//思路和注意点: 对空格的过滤 
// 如何接收到这个完整的数？ 接收到完整的数后判断是否需要乘法或者除法计算
// * 或者 / 直接入栈   +和-入栈前，需要检查是否残留 + 和 - 并进行计算 (不可能有* 或者/，因为数字入栈后，*和/已经计算出栈)
// 最后对残留的部分进行 + 或者- 运算，得到结果
 var calculate = function(s) {


    let number_stack = [];
    let operator_stack = [];

    
    let flag = false;
    let number = 0;


    for(let i = 0; i < s.length; i++){
        let charc = s[i];
        
        if(charc >= '0' && charc <= '9'){
            number = number * 10 + parseInt(charc);
            flag = true;

        } else {
            //遇到不是数字的字符，数字入栈,并清空结果
            if(flag){
                number_stack.push(number);
                number = 0;
                flag = false;

                 //一个完整的数压栈后，需要看是否需要计算 如果栈顶是 * 或者 /
                if ((operator_stack.length > 0) && 
                    (operator_stack[operator_stack.length - 1] === "*" || 
                     operator_stack[operator_stack.length - 1] === "/")) {

                        let rigth = number_stack.pop();  //这里肯定有值
                        let operator = operator_stack.pop(); //这里肯定有值
                        let left = number_stack.pop();

                        let res = calculate_number(left,operator,rigth); 
                        number_stack.push(res); //运算结果入栈
                }

            }

            if(charc === "*" || charc === "/") {
                operator_stack.push(charc);
            } else if(charc === "+" || charc === "-") {

                //如果stack 不为空，说明还有 + 或者- 取出来计算
                while(operator_stack.length  > 0){

                    let rigth = number_stack.pop();  //这里肯定有值
                    let operator = operator_stack.pop(); //这里肯定有值
                    let left = number_stack.pop();

                    let res = calculate_number(left,operator,rigth); 
                    number_stack.push(res); //运算结果入栈
                }

                operator_stack.push(charc);
            }
            
        }  
    }

    //最后一位可能是数字，没有压栈，需要处理
    if(flag){
        number_stack.push(number);
    }
    

    //到这里，没有* 或者/ 只有 + 或者 -,如果运算符栈 还有数据取出来，并取出数字栈的两个数进行运算
    while(operator_stack.length > 0){
        let operator = operator_stack.pop();
        let right = number_stack.pop();
        let left = number_stack.pop();

        let res = calculate_number(left,operator,right);
        number_stack.push(res);
    }


    //返回结果
    return number_stack.pop();
};

var calculate_number = function(left,operator,right)
{
    if(operator === "+" ) return left + right;
    if(operator === "-" ) return left - right;
    if(operator === "*" ) return left * right;
    if(operator === "/" ) return parseInt(left / right);
}


console.log(calculate(" 42 * 5 + 89 / 2  "));
console.log(calculate(" 6 * 5 * 2 "));
console.log(calculate(" 1 - 1 + 1 "));
console.log(calculate(" 0 * 1 + 5 "));
console.log(calculate("1+2*5/3+6/4*2"));

//calculate("1 + 5 + 2");



