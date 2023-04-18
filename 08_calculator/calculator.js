const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for(let i =0; i < array.length; i++){
    sum = (sum + array[i]);
  }
  return sum;
};

const multiply = function(array) {
  let multsum = 1;
  for(let i = 0; i<array.length; i++){
    multsum = multsum * array[i];
  }
  return multsum;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  fact = 1;
  
  for(let i = num ; i > 0 ; i--){
    fact = fact * i;
  }

  return fact;
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
