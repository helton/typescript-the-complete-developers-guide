const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

console.log(drink);

// pepsi is a tuple!
const pepsi: [string, boolean, number] = ['brown', true, 40];
console.log(pepsi[0]);
console.log(pepsi[1]);
console.log(pepsi[2]);

// type alias for a tuple
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
console.log(sprite);
console.log(tea);

const carSpecs: [number, number] = [400, 3354];

// objects has more meaning than tuples, because they have properties!
const carStats = {
  horsePower: 400,
  weight: 3354
};
console.log(carStats);
