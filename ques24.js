"use strict";
/*        QUESTION NO 24:
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less
  than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
//        ANSWER NO 24
// Tests for equality and inequality with strings
let str1 = "Hello";
let str2 = "hello";
console.log(str1 == str2); // false
console.log(str1 != str2); // true
// Tests using the lower case function
console.log(str1.toLowerCase() == str2.toLowerCase()); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 11;
console.log(num1 == num2); // false
console.log(num1 != num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true
// Tests using "and" and "or" operators
console.log(num1 == 10 && num2 == 11); // false
console.log(num1 == 10 || num2 == 11); // true
// Test whether an item is in a array
let array = ["red", "green", "blue"];
console.log("red" in array); // true
console.log("purple" in array); // false
// Test whether an item is not in a array
console.log("purple" in array); // true
console.log("red" in array); // false
