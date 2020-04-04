//Problem 1: Counting Sheep

//
// Input: 3
// Output:
//     3: Another sheep jumps over the fence
//     2: Another sheep jumps over the fence
//     1: Another sheep jumps over the fence
//     All sheep jumped over the fence

//My solution
const sheep = function (num) {
  if (num === 0) {
    return "All sheep jumped over the fence";
  }
  return `${num}: Another sheep jumps over the fence` + "\n" + sheep(num - 1);
};

console.log(sheep(3));
