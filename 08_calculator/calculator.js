const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum
};

const multiply = function(a) {
  let sum = 1;
  for (let i = 0; i < a.length; i++) {
    sum *= a[i];
  }
  return sum
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  if (a == 0) 
    return 1

  else {
    let sum = 1;
    for (let i = 1; i <= a; i++) {
      sum *= i;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
