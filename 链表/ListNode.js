function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/*打印链表
* **/
function print_node(ListNode) {
    var index = ListNode;
    if(!index) {
        console.log("[ ]");
        return;
    }

    var node_list = "[ ";
    while (index) {
        node_list += index.val;
        index = index.next;
        node_list += " -> "
    }
    //去除最后一个,
    node_list += "null "
    node_list += "]";

    console.log(node_list);

}

/*创建链表 用一个数组创建链表
* **/
function creat_node(node_list) {


    let node_arry = [];
    let head = null;
    let cur_node = null;

    for (let i = 0; i < node_list.length; i++) {
        cur_node = new ListNode(node_list[i]);
        node_arry.push(cur_node);
    }

    for (let i = 0; i < node_arry.length; i++) {
         cur_node = node_arry[i];
         let next_node;

         if (i === 0) {
             head = cur_node;
         }
         next_node = (i + 1 === node_arry.length) ? null : node_arry[i + 1];
         cur_node.next = next_node;
    }
    return head;
}



module.exports.print_node = print_node;
module.exports.ListNode = ListNode;
module.exports.creat_node = creat_node;






