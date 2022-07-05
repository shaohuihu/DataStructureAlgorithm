
/**
 *  每次从前面选择一个较大的数与最后一个交换
 *  复杂度: 时间复杂度 最坏情况是O(n^2) 最好情况是O(n) 平均O(n^2)  额外空间复杂度 O(1) 原地排序 不是稳定排序
 * @param {*} data 
 */
function select_sort(data)
{
    for (let end = data.length; end > 0; end--) {
        let max = 0; //每次默认 0 为当前最大值
        for(let begin = 0; begin < end; begin++){
            if(data[max] < data[begin]) max = begin
        }
        let tmp = data[end-1];
        data[end-1] = data[max];
        data[max] = tmp;
    }
}

let data = [1,1,5,3,2,99,8,9,10];
select_sort(data);
console.log(data);






