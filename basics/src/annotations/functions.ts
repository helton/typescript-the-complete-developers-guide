const add = (a: number, b: number): number => {
  return a + b;
};

// we'll avoid type inference for the function returns types
// to avoid unexpected results like the one below that will
// return void because we forgot to add the 'return' statement
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

console.log(add(1, 2));
console.log(multiply(2, 3));

const logger = (message: string): void => {
  console.log(message);
};

logger('Is this OK?');

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// using destructuring syntax
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

interface Weather {
  date: Date;
  weather: string;
}

const lw = ({ weather }: Weather): void => {
  console.log(weather);
};

lw(todaysWeather);
