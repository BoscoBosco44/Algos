/* 
    Given a SORTED array of integers, dedupe the array 
    Because array elements are already in order, all duplicate values will be grouped together.
    return a new array, don't alter original.
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    // Your code here~ 
    let newArr = [];
    let depedNum = nums[0];
    newArr.push(depedNum);
    let counter = 0;

    for(let i = 1; i < nums.length; i++) {
        if(newArr[counter] < nums[i]) {
            counter++;
            newArr.push(nums[i])
        }
    }
    return newArr;
}

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))
console.log(dedupeSorted(nums4))

/*****************************************************************************/


/* 
    Given two arrays, interleave them into one new array.

    The arrays may be different lengths. The extra items should be added to the
    back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected5 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected6 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected7 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected8 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    // Your code here~
    let newArr = []
    if(arr1.length < arr2.length) {
        len = arr1.length
        biglen = arr2.length
    }
    else {
        len = arr2.length
        biglen = arr1.length
    }
    for(let i = 0; i < len; i++) {
        newArr.push(arr1[i])
        newArr.push(arr2[i])
    }

    for(let i = len; i < biglen; i++){
        if(arr2.length > arr1.length) {
            newArr.push(arr2[i])
        }
        if(arr1.length > arr2.length) {
            newArr.push(arr1[i])
        }
    }
    return newArr
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

/*****************************************************************************/