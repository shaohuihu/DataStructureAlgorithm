
const print_node = require('../node').print_node
const ListNode = require('../node').ListNode
const creat_node = require('../node').creat_node




/**
 * https://leetcode.cn/problems/palindrome-linked-list/
 * 
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false
 * @param {*} head 
 */
var isPalindrome = function(head) {

    //先找到中间节点,再翻转，在跟剩余的节点比较
    if(head === null || head.next === null) return true;
    let middle = halfNode(head); //先找到中间节点

    let new_head = reverseList(middle); //翻转中间到末尾的链表，这里会破坏链表结构

    let tmp = new_head;
    let tmp1 = head;
    let flag = true;

    while(tmp){
        if(tmp.val != tmp1.val) {
            flag = false;
            break;
        }
        tmp = tmp.next;
        tmp1 = tmp1.next;
    }

    //再进行一次翻转，对链表结构还原,leetcode 没有要求，这是加分点
    reverseList(new_head);

    return flag;


};

var halfNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next){

        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

var reverseList = function(head) {
    if(head === null || head.mext === null) return head;

    let new_head = null;

    //头插法，每次遍历到一个节点，就插入到头部
    while(head){
        let tmp = head.next;
        head.next = new_head;
        new_head = head;
        head = tmp;
    }

    return new_head;

};


let l1 = creat_node([1,2,3,2,1,5,6,7]);
let result = isPalindrome(l1);
console.log(result);
















