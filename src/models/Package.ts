import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'packages';

const Packages = sequelize.define(
  'Packages',
  {
    idackages: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    price: {
      type: Sequelize.NUMBER,
    },
    days: {
      type: Sequelize.NUMBER,
    },
  },
  {  tableName },
);

export default Packages;
