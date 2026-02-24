#!/usr/bin/env node

/**
 * CLI Calculator Application
 * Supports the following basic arithmetic operations:
 * - Addition: add two or more numbers
 * - Subtraction: subtract numbers from each other
 * - Multiplication: multiply numbers together
 * - Division: divide numbers with error handling for division by zero
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  const operation = process.argv[2];
  const num1 = parseFloat(process.argv[3]);
  const num2 = parseFloat(process.argv[4]);

  if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error('Usage: calculator.js <operation> <number1> <number2>');
    console.error('Operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  let result;

  switch (operation.toLowerCase()) {
    case 'add':
    case '+':
      result = add(num1, num2);
      console.log(`${num1} + ${num2} = ${result}`);
      break;

    case 'subtract':
    case '-':
      result = subtract(num1, num2);
      console.log(`${num1} - ${num2} = ${result}`);
      break;

    case 'multiply':
    case '*':
      result = multiply(num1, num2);
      console.log(`${num1} * ${num2} = ${result}`);
      break;

    case 'divide':
    case '/':
      try {
        result = divide(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
      } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
      }
      break;

    default:
      console.error(`Error: Unknown operation '${operation}'`);
      console.error('Operations: add, subtract, multiply, divide');
      process.exit(1);
  }
}
