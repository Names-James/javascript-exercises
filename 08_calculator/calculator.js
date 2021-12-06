const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);

const multiply = (array) => array.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
});

const power = (a, b) => a ** b;

const factorial = (num) => {
  let newTotal = 1;
  for (i = 1; i <= num; i++) {
    newTotal *= i;
  }
  return newTotal;
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
