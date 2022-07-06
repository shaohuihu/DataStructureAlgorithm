
const print_node = require('./ListNode').print_node
const ListNode = require('./ListNode').ListNode
const creat_node = require('./ListNode').creat_node


/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
 * 进阶：你能尝试使用一趟扫描实现吗？
 * @param {*} head 
 * @param {*} n 
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null && n === 1) return null;
    //新建一个dummy节点 串联head
    let dummy = new ListNode(undefined,head); 
    let tmp  = dummy;
    let tmp1 = dummy;
    //先遍历n个节点
    while(n--){
        tmp = tmp.next;
    }
    //这里需要多走一步
    tmp = tmp.next;  
    while (tmp) {
        tmp1 = tmp1.next;
        tmp = tmp.next;
    }
    tmp1.next = tmp1.next.next;
    return dummy.next;
};


let node = creat_node([1, 2, 3, 4, 5, 6, 7]);
print_node(removeNthFromEnd(node, 6));













