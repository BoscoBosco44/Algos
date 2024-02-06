/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

var numbersA1 = [20, 10, 30];
var numbersB1 = [10, 30, 20];
var expected1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
    for(var i = 0; i < nuns1.length; i++) {
        var arr = nums1[i] + nums2[i];
    }
}

/*****************************************************************************/

/* 
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 
Given an array, rotate the array in place to the right by "k" steps, where "k" is
non-negative.
 
 
BONUS: The given array must be mutated, do not return a new array.
*/

var nums1 = [1, 2, 3, 4, 5, 6, 7];
var k1 = 3;
var expected1 = [5, 6, 7, 1, 2, 3, 4];
/* Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

var nums2 = [-1, -100, 3, 99];
var k2 = 2;
var expected2 = [3, 99, -1, -100];
/* Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

var nums3 = [1, 2, 3, 4];
var k3 = 4;
var expected3 = [1, 2, 3, 4];
/* Explanation: 
After 4 rotations it is back to it's starting point.
*/

var nums4 = [1, 2];
var k4 = 5;
var expected4 = [2, 1];



function rotate(nums, k) { 
    for(var i = 0; i <= k; i++) {
        shift(nums);
    }
    return nums;
}

function shift(arr) {
    console.log(arr);
    var temp = arr[arr.length-1];
    var temp2 = arr[0];
    var last = arr[arr.length - 1];
    arr[0] = temp;

    for(var i = 1; i < arr.length -1; i++) {
        arr[i] = temp2;
        temp2 = arr[i+1];
    }
    return arr;
}

console.log(shift(nums1));
console.log(shift(nums2));
console.log(shift(nums3));
console.log(shift(nums4));

console.log(rotate(nums1));
console.log(rotate(nums2));
console.log(rotate(nums3));
console.log(rotate(nums4));