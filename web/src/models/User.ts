import { Eventing, EventHandler } from "../lib/Eventing";
import { ApiSync } from "../lib/ApiSync";
import { Attributes } from "../lib/Attributes";
import { Model } from "../lib/Model";
import { Collection } from "../lib/Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static readonly path = "users";

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

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }
}
