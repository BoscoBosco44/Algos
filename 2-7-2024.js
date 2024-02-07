// /* 
//     String Encode
//     You are given a string that may contain sequences of consecutive characters.
//     Create a function to shorten a string by including the character,
//     then the number of times it appears. 
    
//     If final result is not shorter (such as "bb" => "b2" ),
//     return the original string.
//   */

// const str1 = "aaaabbcddd";
// const expected1 = "a4b2c1d3";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";
// const expected3 = "a";

// const str4 = "bbcc";
// const expected4 = "bbcc";

// /**
//  * Encodes the given string such that duplicate characters appear once followed
//  * by a number representing how many times the char occurs. Only encode strings
//  * when the result yields a shorter length.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str The string to encode.
//  * @returns {string} The given string encoded.
//  */
// function encodeStr(str) {
//     // Your Code here 🌻
//     // Also some code to get started:

//     // Our string we want to return at the end.
//     let encoded = ""

//     // Track the current letter in a variable, starting at position 0
//     let currentChar = str[0]

//     // Track the number of times this character occurs
//     let currentCharCount = 0;

//     // Loop through the string and itterate(+1/++) the count if we see the character repeated. 
//     // When we come across a new letter, we'll update our currentChar to match. ✨

// }

/* 
    EXTRA
    String Decode  
*/

const str5 = "a3b2c1d3";
const expected5 = "aaabbcddd";

const str6 = "a3b2c12d10";
const expected6 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    // Your Code Here
    let unencoded = "";
    let curentChar = "";
    let curentNum = "";
    
    for(let i = 0; i < str.length; i++) {
        let curentNum = "";
        console.log(str.length)
        console.log("i: " + i)
        if(isNaN(str[i])){
            curentChar = str[i];
        }
        // else if(!(isNaN(str[i]))) {
        //     curentNum += str[i];
        // }
        else {
            curentNum += str[i];
            unencoded += curentChar.repeat(parseInt(curentNum))
        }
    }
    return unencoded;

}

console.log("Decoded: " + decodeStr(str5));
console.log("Decoded: " + decodeStr(str6));

    // We'll want to make use of the JS functions isNaN to check for numbers! 
    isNaN("0") // True
    // Also we'll want to use: parseInt to convert any strings to numbers as needed. 
    parseInt("10") // 10
    // Extra: There is a method in JS called .repeat(x) that we can use to quickly repeat a character x number of times.)




/*****************************************************************************/