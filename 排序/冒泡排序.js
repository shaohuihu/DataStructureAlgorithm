
/** 每次从前面 两两比较 begin 和 begin-1，得到一个比较大的数与end交换
 *  优化方法: 记录最后一次交换的位置
 *  复杂度: 时间复杂度 最坏情况是O(n^2) 最好情况是O(n) 平均O(n^2)  额外空间复杂度 O(1) 原地排序 是稳定排序
 * @param {*} data 
 */
function bubble_sort(data)
{
    for (let end = data.length - 1; end > 0; end--) {
        let sortIndex = 1
        for (let begin = 1; begin <= end; begin++) {
            if (data[begin] < data[begin-1]) {
                //交换
                let tmp = data[begin];
                data[begin] = data[begin-1];
                data[begin-1] = tmp;

                sortIndex = begin;
            }
        }
        end = sortIndex;
    }
}
let data = [1,1,5,3,2,99,8,9,10];
bubble_sort(data);
console.log(data);







