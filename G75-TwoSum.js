
// ---------------------- O(n^2) ----------------------
var sum = 0;

for(var i = 0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {

        if(nums[i] + nums[j] == target) {
            return [i, j];
        }
    }
}

// ---------------------- O(n) ----------------------

for(var i = 0; i < nums.length; i++) {
    
}