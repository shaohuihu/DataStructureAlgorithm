
const print_node = require('./ListNode').print_node
const ListNode = require('./ListNode').ListNode
const creat_node = require('./ListNode').creat_node





/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 * @param {*} head 
 */


var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    let new_head = head;

    //这是外层循环，保证整个链表进行遍历
    while (head && head.next) {

        //这里要用while记录当前head.next 指向哪个合适的位置，这里不能用if，
        //在这个while循环中,head.next 如果 null，终止循环
        while (head.next && head.val === head.next.val) {
            head.next = head.next.next;    
        }

        //保证连边遍历完整
        head = head.next;
    }
    
    return new_head;

};




let node = creat_node([1, 2, 2, 2]);
print_node(deleteDuplicates(node));













