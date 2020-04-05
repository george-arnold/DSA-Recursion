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

const newSplit = function (string, delimeter) {
  if (string === "") {
    return [];
  }
  let index = string.indexOf(delimeter);
  if (index > -1) {
    let item = string.substr(0, index);
    return [item].concat(newSplit(string.substr(index + 1), delimeter));
  }
  return [string];
};
