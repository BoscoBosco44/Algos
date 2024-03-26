/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 
Rehashes an incorrectly hashed string by combining letter count occurrences
and alphabetizing them.
Time: O(?).
Space: O(?).
@param {string} s An incorrectly hashed string.
@returns {string} The correctly rehashed string alphabetized.
*/
function rehash(s) {
    let letter = "";
    let nums = "";
    let objList = [];
    for(let i = 0; i < s.length-1; i++) {
        // console.log(s.slice(0+i, 1+i))
        if(isNaN(s.slice(0+i, 1+i))) {
            console.log(s.slice(0+i, 1+i))
            if(letter !== s.slice(0+i, 1+i)){
                objList.push({[letter]: nums})
                nums = "";
            }
            letter = s.slice(0+i, 1+i);
            
        } else {
            nums += s.slice(0+i, 1+i);
        }
    }
    let finalStr ="";
    let i = 0;
    while(objList.length >  i) {
        
    }


    return objList;
}


console.log(rehash(str1))