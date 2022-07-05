/**
 * 
 * https://leetcode.cn/problems/longest-palindromic-substring/
 * 
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 输入：s = "babad" 
    输出："bab"
    解释："aba" 同样是符合题意的答案。

 * @param {string} s
 * @return {string}
 */


//暴力遍历
var longestPalindrome = function(s) {
    let len = s.length
    if(len < 2){
        return s
    }
    let maxLen = 1, begin = 0
    //判断已经获取到的子串是否是回文串
    const valisdPalindrome=(left, right)=>{
        while(left <  right){
            if(s.charAt(left) !== s.charAt(right)){
                return false
            }
            //往内收缩判断是否符合回文字符串
            left++;
            right--;
        }
        return true
    }
   //枚举所以长度严格大于1的子串
    for(let i = 0; i < len - 1; i++){//设置左边界
        for(let j = i + 1; j < len; j++){//设置右边界
            if(j - i + 1 > maxLen && valisdPalindrome(i,j)){//j - i + 1 > maxLen是不断往外扩展获取最大子串
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.slice(begin, begin + maxLen)
 };

console.log(longestPalindrome("cccaabb"));




