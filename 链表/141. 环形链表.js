
const print_node = require('../node').print_node
const ListNode = require('../node').ListNode
const creat_node = require('../node').creat_node



var hasCycle = function(head) {

    if(head === null || head.next === null) return false;
    let slow = head; 
    let fast = head;

    while(fast && fast.next){
        
        fast = fast.next.next;
        slow = slow.next;

        //指针移动后才开始判断，因为初始值都指向head
        if(fast === slow) return true;
    }

    return false;
    
};



















