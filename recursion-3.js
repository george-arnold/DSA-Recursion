// Write a function that reverses a string.
// Take a string as input, reverse the string, and return the new string.

// recursive Big Oh -> O(n)
const reverseString = function (string) {
  if (string === "") {
    return "";
  }
  return reverseString(string.substr(1)) + string.charAt(0);
};

//iterative Big Oh -> O(n)
const reverseStringI = function (string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // runs ~ linear to string length
    reverseString += string[i];
  }
  return reverseString;
};
