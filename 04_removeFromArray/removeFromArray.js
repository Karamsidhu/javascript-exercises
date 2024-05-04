const remover_help = function(array, choice) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == choice) {
            array.splice(i,2);
        }
    }
    return array
}

const removeFromArray = function(array, a, b) {
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] != undefined)
            remover_help(array, arguments[i]);
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
