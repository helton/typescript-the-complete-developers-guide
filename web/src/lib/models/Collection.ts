import axios from 'axios';
import { Eventing } from './Eventing';
import { Settings } from './Settings';
import { Model } from './Model';

export class Collection<T extends Model<K>, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private path: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(`${Settings.baseUrl}/${this.path}`).then(response => {
      this.models = response.data.map((value: K) => this.deserialize(value));
      this.trigger('change');
    });
  }
}
