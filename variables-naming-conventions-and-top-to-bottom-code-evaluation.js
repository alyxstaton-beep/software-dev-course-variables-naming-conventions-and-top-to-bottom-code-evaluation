/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

//Issues:
// The variables a, b, c, and d are too vague and don't explain what they mean, which makes the code harder to understaned.

//Refactored Code:
let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;
let message = customerName + " bought " + numberOfItems + " items for $ " + totalCost + ".";

console.log(message);

//Additional Variables:
let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;
let storeName = "Target";
let purchaseDate = "April 20";
let message = customerName + " bought " + numberOfItems + " items for $ " + totalCost + " at " + storeName + " on " + purchaseDate + ".";

console.log(message);
