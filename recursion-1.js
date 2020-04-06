//Problem 1: Counting Sheep

//
// Input: 3
// Output:
//     3: Another sheep jumps over the fence
//     2: Another sheep jumps over the fence
//     1: Another sheep jumps over the fence
//     All sheep jumped over the fence

//My solution recursive - O(n)
const sheepR = function (num) {
  if (num === 0) {
    return "All sheep jumped over the fence";
  }
  return `${num}: Another sheep jumps over the fence` + "\n" + sheepR(num - 1);
};

console.log(sheep(3));
// iterative (O(n))

const sheep = function (num) {
  let text = "";
  while (num > 0) {
    text += `${num}: Another sheep jumps over the fence` + "\n";
    num--;
  }
  text += "All sheep jumped over the fence";
  return text;
};
