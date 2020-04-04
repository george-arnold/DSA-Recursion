// Write a recursive function that splits a string
//  based on a separator (similar to String.prototype.split).
//   Don't use JS array's split function to solve this problem.

//
// Input: 02/20/2020
// Output: ["02", "20", "2020"]

//const name = "Sammy"
// const map = Array.prototype.map

// const newName = map.call(name, eachLetter => {
//     return `${eachLetter}a`
// })

// console.log(newName) // ["Sa", "aa", "ma", "ma", "ya"]

const newSplit = function (string) {
  const map = Array.prototype.map;
  if (string === "") {
    return "";
  }
  return newSplit(string.substr(1));
};
