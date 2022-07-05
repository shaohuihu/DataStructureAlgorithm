
const print_node = require('../node').print_node
const ListNode = require('../node').ListNode
const creat_node = require('../node').creat_node



/**
 * https://leetcode.cn/problems/remove-linked-list-elements/
 * 
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 * @param {*} head 
 * @param {*} val 
 */
var removeElements = function(head, val) {

    if(head === null) return head;

    let dummy = new ListNode(undefined,head);  //构造一个dummy节点，来串连head节点
    let new_head = dummy;  //记录这个头结点，返回next 就是串联好的节点

    while(dummy){
        while(dummy.next && dummy.next.val === val){
            dummy.next = dummy.next.next;
        }
        dummy = dummy.next;
    }
    return new_head.next;
};


let l1 = creat_node([1,1,1,1]);
print_node(removeElements(l1,1));












