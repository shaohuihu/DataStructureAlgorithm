
/**
 * 复杂度: 时间复杂度 最坏情况是O(n^2) 最好情况是O(n) 平均O(n^2)  额外空间复杂度 O(1) 原地排序 是稳定排序
 * @param {*} arry 
 */
function insert_sort1(arry) {
    //前面的序列默认有序，从后面的数选一个插入到合适的位置
    for (let begin = 1; begin < arry.length; begin++) {

        //将当前位置的数据与 前面已经排好序进行比较
        let cur = begin;
        while (cur > 0 && arry[cur] < arry[cur - 1]) {
            //一直进行交换 cur - 1 和 cur 交换到合适的位置
            let tmp = arry[cur - 1];
            arry[cur - 1] = arry[cur];
            arry[cur] = tmp;

            cur--;

        }
    }

}

function insert_sort2(arry) {
    //假设前面的数据已经有序 如果比以前的数据小 前面的数据进行挪动
    for (let begin = 1; begin < arry.length; begin++) {

        let cur = begin;
        let v = arry[cur];
        while (cur > 0 && v < arry[cur - 1]) {
            arry[cur] = arry[cur - 1];
            cur--;
        }
        //找到合适的位置插入进去
        arry[cur] = v;

    }
}

//利用二分搜索:找到合适的位置插入进去,搜索位置的时候可以优化比较次数
function insert_sort3(arry) {
    for (let begin = 1; begin < arry.length; begin++) {
        insert(begin, search(begin,arry),arry);
    }

}

function insert(source, dest, arry) {
    let v = arry[source];
    for (let i = source; i > dest; i--) {
        arry[i] = arry[i - 1];
    }
    arry[dest] = v;
    
}

//利用二分搜索的方法 搜索到合适的位置
//搜索区间是[0,index)  index 是要插入元素的索引  [0,index-1] 是排好序的

// [1,2,3,4,6,6]   6
// 开始的时候: begin = 0  end = 6  mid = 2
// 结果返回 return 6

function search(index, arry) {
    let begin = 0;
    let end = index;
    while (begin < end) {
         let mid = (begin + end) >> 1;
         if (arry[index] < arry[mid]) {
            end = mid;
         } else {
            begin = mid + 1; //相等的话 也要移动begin的位置
         }
    }

    return begin;
}

let arry1 = [1,1,5,3,2,99,8,9,10];
insert_sort1(arry1);
console.log(arry1);

let arry2 = [1,1,5,3,2,99,8,9,10];
insert_sort2(arry2);
console.log(arry2);

let arry3 = [1,1,5,3,2,99,8,9,10];
insert_sort3(arry3);
console.log(arry3);







