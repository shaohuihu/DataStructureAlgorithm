
const print_node = require('../node').print_node
const ListNode = require('../node').ListNode
const creat_node = require('../node').creat_node



/**
 * https://leetcode.cn/problems/reverse-linked-list/
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * @param {*} head 
 */
var reverseList1 = function(head) {
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

var reverseList = function(head){

    //递归出口
    if(head === null || head.next === null) return head;

    //reverseList 一个next 节点，返回的新的节点，而这个next 指向null
    var new_head = reverseList(head.next);


    head.next.next = head;
    head.next = null;
    return new_head;
}



let l1 = creat_node([0,8,8,8,8,2,9,3,1,1]);
print_node(reverseList1(l1));














