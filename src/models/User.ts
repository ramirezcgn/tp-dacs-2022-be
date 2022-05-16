import Sequelize from 'sequelize';
import bcryptService from '../services/bcrypt.service';
import sequelize from '../config/database';

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'users';

const User = sequelize.define(
  'User',
  {
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  { hooks, tableName },
);

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = { ...this.get() };

  delete values.password;

  return values;
};

/*sequelize.afterSync((/*options* /) => {
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
});*/

export default User;
