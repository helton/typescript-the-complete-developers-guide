class Vehicle {
  constructor(private _color: string = 'red') {}

  get color(): string {
    return `Color: ${this._color}`;
  }

  protected honk(): void {
    console.log('beeeep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vruuumm');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'blue');
car.startDriving();
console.log(car.color);
