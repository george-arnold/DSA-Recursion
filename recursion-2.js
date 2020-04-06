// Write a function called powerCalculator() that takes two parameters,
// an integer as a base,
//and another integer as an exponent.
//The function returns the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)

//     powerCalculator(10,2) should return 100
//     powerCalculator(10,-2) should return exponent should be >= 0

// recursive big O ->  O(n)
const powerCalculatorR = function (base, exp) {
  if (exp < 0) {
    //constant
    return "exponent should be greater than or equal to zero";
  }
  if (exp === 0) {
    //constant
    return 1;
  }
  return base * powerCalculatorR(base, exp - 1); //  runs exp times
};

// iterative big O -> 0(1)
const powerCalculatorI = function (base, exp) {
  if (exp < 0) {
    return "exponent should be greater than or equal to zero";
  }
  return base ** exp;
};
