
/**
 * 
 * 3. 无重复字符的最长子串
    给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s === null || s.length === 0) return 0;

    let len = s.length;
    let pi = -1;
    let li = 0;//这是i - 1个位置出现最长子串的开始索引
    let max = 1;//最大子串的最大值默认为1
    let hashmap = {}; //存放每个字母出现的位置
    hashmap[s[0]] = 0; //保存第一个位置出现的位置
    for (let i = 1; i < len; i++) {
        //取出上一个i出现的位置pi
        pi = hashmap[s[i]];

        if (pi !== undefined && li <= pi) {
            li = pi + 1;
        }

        hashmap[s[i]] = i; //存放当前位置进去

        max = Math.max(max,i - li + 1);
    }
    return max;
};


let len = lengthOfLongestSubstring("abcabcbb");
console.log(len);



