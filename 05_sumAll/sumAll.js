const sumAll = function(one, two) {
    let sum = 0;
    
    
    if (one < 0 || two < 0) {
        return "ERROR"

    } else if (Number.isInteger(one) & Number.isInteger(two)) {

        if (one > two) {
            let temp = one;
            one = two;
            two = temp;
        }

        for (let i = one; i <= two; i++) {
           sum += i;
        }
        return sum;
    
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
