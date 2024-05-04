const reverseString = function(string) {
    let word = "";

    for (let i = 0; i < string.length; i++) {
        word += string[(string.length-1)-i];
    }
    return word
}

// Do not edit below this line
module.exports = reverseString;
