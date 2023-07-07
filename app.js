
/************ Quick Question #1 ************/
new Set([1,1,2,2,3,4]) 
// {1,2,3,4}

/************ Quick Question #2 ************/
//[...new Set("referee")].join(""); 
// "ref"

/************ Quick Question #3 ************/
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// {[1,2,3] => true, [1,2,3] => false}


function hasDuplicate(arr) {
    const arrSet = new Set(arr);
    if (arrSet.size != arr.length) {
        return true
    } else {
        return false
    }
};


function vowelCount(str) {
    const vowelMap = new Map();
    let currentVal, newVal;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            if (vowelMap.has(char)) {
                currentVal = vowelMap.get(char);
                newVal = currentVal + 1;
                vowelMap.set(char, newVal);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
};
