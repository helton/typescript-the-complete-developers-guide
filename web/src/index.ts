import { UserList } from './custom/views/UserList';
import { User, UserProps } from './custom/models/User';

const users = User.buildUserCollection();

users.fetch();

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  } else {
    throw new Error('Root element not found');
  }
});
