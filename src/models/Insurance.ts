import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Policy from './Policy';

const tableName = 'insurances';

const Insurance = sequelize.define(
  'Insurance',
  {
    idInsurance: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    company: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.NUMBER,
    },
  },
  { tableName },
);

Insurance.hasMany(Policy);
Policy.belongsTo(Insurance);

export default Insurance;
