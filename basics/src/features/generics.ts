class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const a = new ArrayOfAnything([1, 2, 3, 4]);
console.log(a.get(0));

const b = new ArrayOfAnything(['AAAA', 'BBBB']);
console.log(b.get(1));

function print<T>(arr: T[]): void {
  arr.forEach((value: T): void => console.log(value));
}

print([1, 2, 3, 4]);

// Generic constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach((value: T): void => value.print());
}

printHousesOrCars([new Car(), new House(), new Car()]);
