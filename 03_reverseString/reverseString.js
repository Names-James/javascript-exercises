const reverseString = function(str) {
let newString = '';
for (i=0; i <= str.length; i++) {
    newString += str.charAt(str.length - i);
};
return newString;
};

// Do not edit below this line
module.exports = reverseString;
