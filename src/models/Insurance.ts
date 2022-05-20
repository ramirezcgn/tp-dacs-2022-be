import Sequelize from 'sequelize';
import sequelize from '../config/database';


const tableName = 'insurance';

const Insurance = sequelize.define(
  'Insurance',
  {
    idInsurance: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    company: {
      name: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.NUMBER,
    },
    
  },
  {  tableName },
);

export default Insurance;
