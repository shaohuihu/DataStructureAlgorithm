
const print_node = require('./ListNode').print_node
const ListNode = require('./ListNode').ListNode
const creat_node = require('./ListNode').creat_node




/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} l1 
 * @param {*} l2 
 */
 var addTwoNumbers = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    //0 + 0 = 0;
    if((l1.next === null && l2.next === null ) && 
    (l1.val === 0 && l2.val === 0)) return l1;
    //新建一个哑结点
    let new_head = new ListNode(0, null);
    let tmp = new_head;
    //初始化一个进位
    let carry = 0;

    
    //都有数据
    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;
        carry = (sum >= 10 ? 1 : 0);
        let newNode = new ListNode((sum % 10) ,null);
        tmp.next = newNode;
        l1 = l1.next;
        l2 = l2.next;
        tmp = tmp.next;
    }

    //只有其中一个有值
    while (l1 || l2) {
        let sum;
        if (l1) {
            sum = l1.val + carry;
        } else {
            sum = l2.val + carry;
        }
        carry = (sum >= 10 ? 1 : 0);
        let newNode = new ListNode((sum % 10),null);
        tmp.next = newNode;
        if (l1) {
            l1 = l1.next;
        } else {
            l2 = l2.next;
        }
        tmp = tmp.next;
    }
    if(carry){
        let newNode = new ListNode(carry,null);
        tmp.next = newNode;
    }
    return new_head.next;

};


let l1 = creat_node([0, 8, 8, 8, 8, 2, 9, 3, 1, 1]);
let l2 = creat_node([0, 9, 1, 5, 5, 5, 1, 1, 6]);
print_node(addTwoNumbers(l1, l2));














