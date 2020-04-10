// Write a recursive function that prints the Fibonacci sequence of a given number.
//The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.
// For example, the 7th Fibonacci number
//  in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// recursive Big O -> O(2^n)
const fibonacci = function (num) {
  if (num < 2) {
    return num;
  }
  let array = [];
  return array.concat(fibonacci(num - 1) + fibonacci(num - 2));
};

// iterative Big O -> (0(n))
const fibI = function (num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
};

console.log("recursion", fibonacci(10));
console.log("iterative", fibI(10));
