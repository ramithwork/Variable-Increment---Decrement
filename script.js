// 1. The Addition and Subtraction Operators (+ and -) with Assignment (=):
console.log("Addition and Subtraction Operators with Assignment:")
let counter = 10
// Increment by 1
console.log(counter = counter + 1)
// Decrement by 1
console.log(counter = counter - 1)
// Increment by 5
console.log(counter = counter + 5)


// 2. The Compound Assignment Operators (+= and -=):
console.log("Compound Assignment Operators:")
let number = 20
// Increment by 1
console.log(number += 1)
// Increment by 10
console.log(number += 10)
// Decrement by 1
console.log(number -= 1)
// Decrement by 5
console.log(number -= 5)


// 3. The Increment (++) and Decrement (--) Operators:
console.log("Increment and Decrement Operators:")
console.log('***Pay attention to the prefix/postfix difference')
let num1 = 5;
let num2 = 5;
let result1;
let result2;

// Postfix increment
result1 = num1++; // result1 is 5, num1 is now 6
console.log(result1, num1)

// Prefix increment
result2 = ++num2; // num2 is now 6, result2 is 6
console.log(result2, num2)

let val1 = 8;
let val2 = 8;
let res1;
let res2;

// Postfix decrement
res1 = val1--; // res1 is 8, val1 is now 7
console.log(res1, val1)

// Prefix decrement
res2 = --val2; // val2 is now 7, res2 is 7
console.log(res2, val2)

