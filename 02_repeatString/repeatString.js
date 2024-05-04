const repeatString = function(string, numb) {

    if (numb < 0) {
        return "ERROR"
    }


    let output = ""
    for (let index = 0; index < numb; index++) {
        output = output.concat(string);
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
