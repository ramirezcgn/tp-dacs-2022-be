import User from '../../models/User';
//import crypto = require('../globs/crypto');

export default () =>
  User.bulkCreate(
    [
      {
        username: 'admin',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john-doe@admin.com',
        password: 'password',
      },
    ],
    {
      fields: ['username', 'firstName', 'lastName', 'email', 'password'],
      ignoreDuplicates: true,
    },
  );
