
const print_node = require('../node').print_node
const ListNode = require('../node').ListNode
const creat_node = require('../node').creat_node




/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} l1 
 * @param {*} l2 
 */
var mergeTwoLists = function(l1, l2) {
    

    //如果有某条链表为空，则返回另一条 
    if(l1 === null ) return l2;
    if(l2 === null) return l1;


    //新建一个dummy节点，串连整个结果链表
    let new_head = new ListNode(0,null);

    //这里需要一个tmp节点保存哑结点，用来遍历链表
    let temp = new_head;



    
    while(l1 && l2){

        //注意这里是谁小,temp.next指向谁，指向后该节点进行next
        if(l1.val <= l2.val){
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }

        temp = temp.next;
    }


    //这里判断剩余的，没有遍历完的节点
    if(l1){
        temp.next = l1;
    }

    if(l2){
        temp.next = l2;
    }

    return new_head.next;


};

let l1 = creat_node([1,2,4]);
let l2 = creat_node([1,3,4]);
print_node(mergeTwoLists(l1,l2));













