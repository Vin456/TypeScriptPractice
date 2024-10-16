function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  // if (typeof num1 !== "number" || typeof num2 !== "number") {
  //   throw new Error("Correct Input not given");
  // }

  // if (showResult) {
  //   // This will cause logical error that we were facing the last time
  //   // where number is converted to string and added
  //   console.log(phrase + num1 + num2);
  // } else {
  //   return num1 + num2;
  // }

  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 5.8;
const printValues = true;
const resultPhrase = "The Result is:";

// Basic Type Inference
// Complier determines the type of variables, parameters and return values
// Hover over the variables let variables is shown as number3: string
let number3 = "5.8";
let number4 = 5.8;

// Function return type inference
function addition(a: number, b: number) {
  return a + b; // Typescript infers the return type as number
}

// Contextual inference
const numbers = [1, 2, 3];
numbers.forEach(
  (num) => console.log(num) // Typescript infers the type of 'num' as 'number'
);

// Type assignment
// If you are declaring and intializing then we need to specifiy
// This doesn't work as we cannot reassign const values
// const text: string;
// text = "Hello World";
let text: string;
text = "Vinyas";

// Advantages of Ts
// Doesn't let the dev to reassign a variable
// let sampleTxt = "Hello World";
// sampleTxt = 5.0;

const result = add(number1, number2, printValues, resultPhrase);
// console.log(result);
