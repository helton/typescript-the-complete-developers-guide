import faker from 'faker';
import { Location } from './Location';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: Location;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
