import { Eventing, EventHandler } from '../../lib/models/Eventing';
import { ApiSync } from '../../lib/models/ApiSync';
import { Attributes } from '../../lib/models/Attributes';
import { Model } from '../../lib/models/Model';
import { Collection } from '../../lib/models/Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static readonly path = 'users';

  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(this.path)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection(this.path, (json: UserProps) => this.buildUser(json));
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
