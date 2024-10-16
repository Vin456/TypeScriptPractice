// Type Aliases/ Custom Types
type Combinable = number | string; // Union
type ConversionDescriptor = 'as-text' | 'as-number'; // Union with literal types

// Unions
function combine (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  }  else {
     result = input1.toString() + input2.toString();
  }

  // if (typeof input1 === 'string' && typeof input2 === 'string') {
  //   result = input1 + input2;
  // }
  return result;
}

const combineAges = combine(30, 40, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '40', 'as-number');
console.log(combineStringAges);

const comineNames = combine("Jhon", "Anna", 'as-text');
console.log(comineNames);

