/* 
  Consult the Oracle

  Given an array of wise answers, randomly choose a response and return it
*/

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

/**
 * Given an array of wise answers, randomly choose a response and return it
 * @param {Array<any>} arr
 * @returns {string} the randomly chosen oracle response 
 */
function consultTheOracle(arr) {
    var len = arr.length;
    var rando = Math.floor(Math.random() * arr.length);

    return arr[rando];
}

console.log(consultTheOracle(lifesAnswers));

/* 
  From zoom interview with student in year 2020

  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

 arr1 = ["a", "b", "c"];
 expected1 = ["a", "b", "c", "a", "b", "c"];

 arr2 = ["a"];
 expected2 = ["a", "a"];

 arr3 = [];
 expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */

function concatArrWithSelf(items) {
    var newitems = []
    for (var x = 0; x < 2; x++){
    for (var i = 0; i < items.length; i++){
    var position = items[i]
    // console.log(position)
    newitems.push(position)
    }
}
// return items
console.log(newitems)
}

concatArrWithSelf(arr1)