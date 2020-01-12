let apples: number = 5;
apples = 3;
//apples = 'aaaa';

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [2, 3, 4, 1];
let truths: boolean[] = [true, true, false];

// Classes

class Car {}

let car: Car = new Car();

// Object literal - inline interface?

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(2);

type SameInSameOut<T> = (_: T) => T;

const echo: SameInSameOut<string> = content => {
  return content;
};

echo('hahha');

const doubleIt: SameInSameOut<number> = x => x * 2;

doubleIt(2);

// When to use annotations
// 1) Functions that returns 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (const word of words) {
  if (word === 'green') {
    foundWord = true;
    break;
  }
}
console.log('Did you find it?', foundWord);

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (const number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
    break;
  }
}

console.log(numberAboveZero);
