
/**
 * 归并排序: 不断切割子序列，直到不能切割，再去合并子序列
 * 复杂度:最好、最坏、平均复杂度都是O(nlogn)，额外空间复杂度O(n),不是原地排序，是稳定排序
 * @param {} data 
 */

let leftArry;

function merge_sort(data)
{
    
    //因为合并需要左边和右边的数据进行比较，先申请一份内存
    leftArry = new Array(data.length >> 1);

    sort(0, data.length, data);
}

//对[begin, end) 内的数据排序
function sort(begin, end, data) {
    if (end - begin < 2) return;

    let mid = (begin + end) >> 1;
    sort(begin, mid, data);
    sort(mid, end, data);

    //merge
    merge(begin, mid, end, data);


}



//对[begin, mid) 和[mid, end)的数据合并
function merge(begin, mid, end, data) {
    
    let li = 0, le = mid - begin;
    let ri = mid, re = end;
    let ai = begin;

    for (let i = 0; i < le; i++) {
        leftArry[i] = data[begin + i];
    }

    while (li < le) {
        if (ri < re && data[ri] < data[li]) {
            data[ai++] = data[ri++];
        } else {
            data[ai++] = leftArry[li++];
        }
    }
}

let data = [1, 1, 5, 3, 2, 99, 8, 9, 10];
merge_sort(data);
console.log(data);











