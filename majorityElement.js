/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

var majorityElement = (nums = [2, 2, 1, 1, 1, 2, 2]) => {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];

        obj[e] = obj[e] ? obj[e] + 1 : 1;

    }
    for (const key in obj) {
       if(obj[key] >= nums.length/2){
        return key;
       }
    }
};   

console.log(majorityElement());
