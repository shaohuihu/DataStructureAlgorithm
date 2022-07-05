/**
 * 快速排序：不断寻找一个轴点位置，备份这个轴点元素，将小于轴点位置的数据放左边，将大于轴点位置的数据放右边
 * 复杂度: 最好情况是O(nlogn) 最坏情况是O(n^2) 平均O(nlogn) 额外空间复杂度O(1) 是原地排序 不是稳定排序
 * @param {} data 
 */
function quick_sort(data)
{
    sort(0, data.length);
}


//交换l1和l2的位置
function swap(l1, l2, data) {
    let temp = data[l1];
    data[l1] = data[l2];
    data[l2] = temp;
}
//取start 到 end 之间的一个随机数
function random_number(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}


function sort(begin, end) {
    if (end - begin < 2) return;

    let mid = pivotIndex(begin, end, data);

    sort(begin, mid);
    sort(mid + 1, end);
 
}

function pivotIndex(begin, end, data) {


    //这里随机选择pivot可能更合理，左右均匀的时候排序最快
    let rand_index = random_number(begin, end - 1);
    swap(begin, rand_index, data);

    let pivot = data[begin]; 

    //end 指向最后一个元素
    end--;

    while (begin < end) {
        while (begin < end) {
            if (data[end] > pivot) {
                end--;
            } else {
                data[begin++] = data[end];
                break;  //跳出当前循环,结束右边，从左边开始比较
            }
        }

        while (begin < end) {
            if(data[begin] < pivot) {
                begin++;
            } else {
                data[end--] = data[begin];
                break; //跳出当前循环,结束左边，从右边开始比较
            }
        }
    }

    data[begin] = pivot;
    return begin;

}


let data = [1, 1, 5, 3, 2, 99, 8, 9, 10];
quick_sort(data);
console.log(data);








