/* 
    Return the fibonacci number at the nth position, recursively.
    
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    
    0 + 1 = 1
    1 + 1 = 2
    1 + 2 = 3
    2 + 3 = 5
    3 + 5 = 8
    5 + 8 = 13
    8 + 13 = 21
    13 + 21 = 34

    The next number is found by adding up the two numbers before it,
    starting with 0 and 1 as the first two numbers of the sequence.
*/

// The nums passed into the algorithm are like index positions because they count up from 0.

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
    // Base Case(s)?
    // Logic?
    // Recursive Call

    // BONUS: Research and apply MEMOIZATION to your Fibonacci function to improve performance.
}


console.log(fibonacci(num1));
console.log(fibonacci(num2));
console.log(fibonacci(num3));
console.log(fibonacci(num4));
console.log(fibonacci(num5));
console.log(fibonacci(num6));

/*****************************************************************************/