
const print_node = require('./ListNode').print_node
const ListNode = require('./ListNode').ListNode
const creat_node = require('./ListNode').creat_node


/**
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 * @param {*} headA 
 * @param {*} headB 
 */
var getIntersectionNode = function(headA, headB) {
  

    if (headA === null || headB === null) {
        return null;
    }

    let pA = headA, pB = headB;

    //这里应该用 PA !== pB 遍历 如果遍历两个链表不相交，则都是null 返回null
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;

        //非常容易写成这种，如果链表不相交，这里是死循环
        // pA = pA.next === null ? headB : pA.next;
        // pB = pB.next === null ? headA : pB.next;
    }
    return pA;

};



l1 = creat_node([1, 2, 3, 4, 5]);
l2 = creat_node([1, 2, 3, 4, 5]);

print_node(getIntersectionNode(l1,l2));














