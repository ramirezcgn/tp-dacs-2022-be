import Sequelize from 'sequelize';
import sequelize from '../config/database';



const tableName = 'customer';

const Customer = sequelize.define(
  'Customer',
  {
    dni: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    firstName: {
      name: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    dateOfBirh: {
        type: Sequelize.DATE,
      },
    
  },
  {  tableName },
);

export default Customer;
