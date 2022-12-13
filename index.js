// Define variables for the two input numbers and the result
let num1 = 0;
let num2 = 0;
let result = 0;

// Define a function to add the two input numbers
function add() {
  result = num1 + num2;
  return result;
}

// Define a function to subtract the two input numbers
function subtract() {
  result = num1 - num2;
  return result;
}

// Define a function to multiply the two input numbers
function multiply() {
  result = num1 * num2;
  return result;
}

// Define a function to divide the two input numbers
function divide() {
  result = num1 / num2;
  return result;
}

// Prompt the user for the two input numbers
num1 = prompt("Enter the first number:");
num2 = prompt("Enter the second number:");

// Prompt the user for the operation to perform
let operation = prompt("Enter the operation to perform (add, subtract, multiply, divide):");

// Perform the selected operation and display the result
if (operation === "add") {
  result = add();
} else if (operation === "subtract") {
  result = subtract();
} else if (operation === "multiply") {
  result = multiply();
} else if (operation === "divide") {
  result = divide();
}

// Display the result
console.log("The result is: " + result);
