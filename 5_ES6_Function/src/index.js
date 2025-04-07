var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x){
//     return 2*x;
// }
// const Newnum = numbers.map(double);
// console.log(Newnum);
console.log("use Map");
const Newnum = numbers.map(function (x) {
  return x + 1;
});
console.log(Newnum);

//Filter - Create a new array by keeping the items that return true.
console.log("use filter");
const Newnumber = numbers.filter(function (x) {
  return x > 10;
});
console.log(Newnumber);
///////////////////////
var Newnumbers = [];
console.log("use forEach");
numbers.forEach(function (x) {
  if (x < 50) Newnumbers.push(x);
});
console.log(Newnumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
console.log("use forEach");
var Newnumbers1 = 0;
numbers.forEach(function (x) {
  Newnumbers1 += x;
});
console.log(Newnumbers1);
//////////

console.log("using reduce");
var Newnumbers2 = numbers.reduce(function (accumulator, x) {
  return accumulator + x;
});
console.log(Newnumbers2);
//Find - find the first item that matches from an array.
console.log("using find");
const Newnumber3 = numbers.find(function (x) {
  return x > 20;
});
console.log(Newnumber3);
//FindIndex - find the index of the first item that matches.
const Newnumber4 = numbers.findIndex(function (x) {
  return x > 20;
});
console.log(Newnumber4);

import emojipedia from "./emojipedia";

const newemojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newemojipedia);

////////
var numbers1 = [98, 76, 9, 7, 21, 19];
const Newnumber5 = numbers1.find((x) => x > 20);
console.log(Newnumber5);
