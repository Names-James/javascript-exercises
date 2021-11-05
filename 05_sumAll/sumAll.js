const sumAll = function(one, two) {
    //creaete solution variable
    let finalSum = 0;
    //only accept numbers, error if string/array
    if (typeof(one) == 'number' && typeof(two) == 'number') {
        //error if negative
        if (one < 0 || two < 0) {
            return 'ERROR';
        } else {
            let big;
            let little;
            if (one >= two){
                    big = one;
                    little = two;
            } else {
                    big = two;
                    little = one;
            }
            for (i = little; i <= big; i++) {
                finalSum += i;
            }
        }
        return finalSum;
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
