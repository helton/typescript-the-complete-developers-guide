interface Reportable {
  summary(): string;
}

interface Vehicle extends Reportable {
  name: string;
  createdAt: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'Civic',
  createdAt: new Date(),
  broken: true,

  summary(): string {
    return `Name: ${this.name}, Year: ${this.createdAt.getFullYear()}`;
  }
} as Vehicle;

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is ${this.color} has ${
      this.sugar
    } mg of sugar. Is it carbonated? ${this.carbonated ? 'Yes!' : 'Hell no!'}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
