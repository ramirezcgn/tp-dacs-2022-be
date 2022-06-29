import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'password_resets';

const PasswordReset = sequelize.define(
  'PasswordReset',
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: false,
        fields: ['email'],
      },
    ],
  },
  { tableName },
);

export default PasswordReset;
