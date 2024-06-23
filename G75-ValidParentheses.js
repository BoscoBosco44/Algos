





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


//-------------------------------

public class Solution {
    public
        
        bool matching(char a, char b) {
            return ((a == '(' && b == ')') || (a == '{' && b == '}') || (a == '[' && b == ']'));
        }
    
        
        bool IsValid(string s) {
            stack<int> stk; 
            for(int i = 0; i < s.length(); i++) {
                if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
                    stk.push(s[i]);
                }
                else {
                    if(stk.empty() == true) {
                        return false;
                    }
                    else if(matching(stk.top(), s[i]) == false) {
                        return false;
                    }
                    else {
                        stk.pop();
                    }
                }
            }
            return (stk.empty() == true);
        }
    };


    //----------------------

    public class Solution {
        public bool IsValid(string s) {
            if (s.Length <= 1)
                return false;
    
            var solList = new List<int>();
            for (var i = 0; i < s.Length; i++)
            {
                if (s[i] == '(')
                {
                    solList.Add(1);
                    continue;       
                }
                if (s[i] == '[')
                {
                    solList.Add(2);
                    continue;       
                }
                if (s[i] == '{')
                {
                    solList.Add(3);
                    continue;       
                }
                if (solList.Count == 0)
                    return false;
                if (s[i] == ')' && solList[solList.Count - 1] == 1)
                {
                    solList.RemoveAt(solList.Count - 1);
                    continue;
                }
                if (s[i] == ']' && solList[solList.Count - 1] == 2)
                {
                    solList.RemoveAt(solList.Count - 1);
                    continue;
                }
                if (s[i] == '}' && solList[solList.Count - 1] == 3)
                {
                    solList.RemoveAt(solList.Count - 1);
                    continue;
                }
                
                return false;
            }
            return solList.Count == 0;
        }
    }