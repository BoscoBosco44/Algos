/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (de-duped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */
function orderedIntersection(sortedA, sortedB) {

    let i = 0;
    let j = 0;
    let x = 0;
    let multiple = false;
    newArr = [];
    console.log(sortedA.length)
    console.log(sortedB.length)

    while (i < sortedA.length && j < sortedB.length) {
        console.log("comparing: ", sortedA[i], " and ", sortedB[j])
        if(sortedA[i] > sortedB[j]) {
            j++;
        }
        else if (sortedA[i] === sortedB[j]) {
            console.log("sortedA[i] = ",sortedA[i]);

                if(sortedA[i] === newArr[i-1]) {
                    i++;
                    j++;
                    multiple = true;
                }

                if (multiple == false) {
                newArr.push(sortedA[i]);
                i++;
                j++;
            }
            else {
                i++;
                j++;
            }
        }
        else {
            i++;
        }
    }
    return newArr;
}

console.log(orderedIntersection(numbersA1, numbersB1))
console.log(orderedIntersection(numbersA2, numbersB2))
console.log(orderedIntersection(numbersA3, numbersB3))