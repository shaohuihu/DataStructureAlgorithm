
const print_node = require('./ListNode').print_node
const ListNode = require('./ListNode').ListNode
const creat_node = require('./ListNode').creat_node


/**
 * https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
var getKthFromEnd = function(head, k) {
    let tmp = head;
    let new_head = head;

    //这里有个技巧，如果是找倒数第K个节点，先让链表走k个节点，
    //然后从K个节点到末尾遍历，new_head 从头遍历 遍历结束，则返回new_head
    while (k--) { 
        tmp = tmp.next;
    }
    while (tmp) {
        new_head = new_head.next;
        tmp = tmp.next;
    }
    return new_head;
};


let l1 = creat_node([1, 2, 3, 4, 5]);
print_node(getKthFromEnd(l1, 2));












