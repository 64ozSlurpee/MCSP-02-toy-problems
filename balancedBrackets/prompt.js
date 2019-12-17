// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    //create results variable;
    var results = [];
    //create object to hold options
    var options = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    //iterate through string;
    for (let i = 0; i < str.length; i++){
        //if bracket equals an opening bracket;
        if (str[i] === '(' || str[i] === '[' || str[i] === '{'){
            //push to results;
            results.push(str[i]);
        }
        //else pop from results
        else {
            let closed = results.pop();
            //if element doesn't equal obj[popped element]
            if (str[i] !== options[closed]){
            //return false
            return false;
            }
        }
    }
    //if results length doesnt equal 0 return false
    if (results.length !== 0){
        return false;
    
    }
        return true;
}
