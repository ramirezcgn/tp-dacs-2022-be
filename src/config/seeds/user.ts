import User from '../../models/User';
//import crypto = require('../globs/crypto');

export default () =>
  User.bulkCreate(
    [
      {
        name: 'admin',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john-doe@admin.com',
        password: 'password',
      },
    ],
    {
      fields: ['name', 'firstName', 'lastName', 'email', 'password'],
      ignoreDuplicates: true,
    },
  );
