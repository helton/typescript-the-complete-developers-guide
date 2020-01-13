import { User } from './models/User';

const user = User.buildUser({
  id: 1,
  name: 'Peter',
  age: 37
});

user.on('change', () => {
  console.log('change', user);
});

user.on('save', () => {
  console.log('save', user);
});

user.on('error', () => {
  console.log('error', user);
});

user.save();
console.log('admin?', user.isAdminUser());
