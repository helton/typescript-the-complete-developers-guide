import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const collection = User.buildUserCollection();

collection.events.on("change", () => {
  collection.models.forEach((user: User) => console.log(user.get("name")));
});

collection.fetch();
