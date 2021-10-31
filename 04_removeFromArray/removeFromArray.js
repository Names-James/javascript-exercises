const removeFromArray = function() {
    const values = arguments[0];
    const arg = [];

    for (i = 1; i < arguments.length; i++) {
            arg.push(arguments[i]);
    };


    for (i = 0; i <= arg.length; i++) {
        for (r=0; r <= values.length; r++) {
            if (values[r] == arg[i]) {
                values.splice(r, 1);
            }
        }
    };

return values;
};
// Do not edit below this line
module.exports = removeFromArray;
