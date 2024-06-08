





//----------- first faild solution (fails on {[]}) ---------
for(var i = 0; i < s.length - 1; i=i+2) {
    var l1 = s.charAt(i);
    var l2 = s.charAt(i+1);

    if(l1 == '(' && l2 == ')') {
        if(i == s.length - 2) {
            return true;
        } else {
            continue;
        }
    } else if (l1 == '[' && l2 == ']') {
        if(i == s.length - 2) {
            return true;
        } else {
            continue;
        }
    } else if (l1 == '{' && l2 == '}') {
        if(i == s.length - 2) {
            return true;
        } else {
            continue;
        }
    }
    else {
        return false;
    }
}