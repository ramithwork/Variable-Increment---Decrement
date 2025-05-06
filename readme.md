# Increment/Decrement Variables in JS
There are 3 main ways of doing it.

## 1. The addition (+) and subtraction (-) operators with assignment operator (=)

This is the most straightforward way. You take the current value of the variable, add or subtract the desired amount, and then assign the result back to the same variable.

let counter = 10;

// Increment by 1
counter = counter + 1; // counter is now 11

// Increment by 5
counter = counter + 5; // counter is now 16

// Decrement by 1
counter = counter - 1; // counter is now 15

// Decrement by 3
counter = counter - 3; // counter is now 12

## 2. The Compound Assignment Operators (+= and -=)

These operators provide a shorthand way to perform addition or subtraction and assignment in a single step.

let score = 20;

// Increment by 1
score += 1; // Equivalent to score = score + 1; (score is now 21)

// Increment by 10
score += 10; // Equivalent to score = score + 10; (score is now 31)

// Decrement by 1
score -= 1; // Equivalent to score = score - 1; (score is now 30)

// Decrement by 5
score -= 5; // Equivalent to score = score - 5; (score is now 25)

## 3. The Increment (++) and Decrement (--) Operators

These are special operators specifically designed to increment or decrement a variable by one. They come in two forms:

Postfix: The operator is placed after the variable (variable++ or variable--). The current value of the variable is returned before the increment or decrement takes place.   

Prefix: The operator is placed before the variable (++variable or --variable). The variable is incremented or decremented first, and then the new value is returned. 

let num1 = 5;
let num2 = 5;
let result1;
let result2;

// Postfix increment
result1 = num1++; // result1 is 5, num1 is now 6

// Prefix increment
result2 = ++num2; // num2 is now 6, result2 is 6

let val1 = 8;
let val2 = 8;
let res1;
let res2;

// Postfix decrement
res1 = val1--; // res1 is 8, val1 is now 7

// Prefix decrement
res2 = --val2; // val2 is now 7, res2 is 7

## Which one should you use?

- For incrementing or decrementing by a value other than 1, use the + and - operators with assignment or the compound assignment operators (+=, -=).
- For incrementing or decrementing by exactly 1, the ++ and -- operators are concise and often preferred.
- Be mindful of the difference between prefix and postfix when using ++ and --, especially when the result of the operation is being used in the same statement.