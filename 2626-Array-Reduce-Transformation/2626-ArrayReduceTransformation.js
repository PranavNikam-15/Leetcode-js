/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    nums.forEach((num)=>{
       result = fn(result, num);
    });
    return result;
};