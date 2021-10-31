const repeatString = function(str, reps) {
    let newStr = '';
    if (reps < 0) {
        newStr = 'ERROR';
    } else {
        for (i = 0; i < reps; i++) {
        newStr += str;
        };
    };
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
