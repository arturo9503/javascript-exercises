const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sum = 0;
	for (let i  = 0 ; i < a.length ; i++){
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let product = 1;
  for (let i = 0 ; i < a.length ; i++){
    product = product*a[i];
  }
  return product;
};

const power = function(a, b) {
  let pow = 1;
  for (let i = 0 ; i < b; i++){
    pow = pow*a;
  }
  return pow;
};

const factorial = function(a) {
	let fact = a;
  for (let i = a - 1 ; i > 0 ; i-- ){
    fact = fact*i;
  }
  if (fact == 0){
    fact = 1;
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
