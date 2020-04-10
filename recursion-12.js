const binary = function (num) {
  if (num < 2) {
    return num;
  }
  return binary(num / 2) + [num % 2];
};

console.log(binary(10));
