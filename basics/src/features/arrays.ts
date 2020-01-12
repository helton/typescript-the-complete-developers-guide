let carMakers: string[] = [];
carMakers = ['Ford', 'Toyota', 'Chevy'];

const dates = [new Date(), new Date()];

let carsByMake: string[][];
carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values

const firstCar = carMakers[0];
const myCar = carMakers.pop();
console.log(myCar);

// Prevent incompatibles values

// nope!
// carMakers.push(100);

// Help with 'map'

console.log(
  carMakers.map((car: string): string => {
    return car.toUpperCase();
  })
);

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push(new Date());
importantDates.push('2030-02-02');

console.log(importantDates);
