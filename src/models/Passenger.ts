import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Policy from './Policy';

const tableName = 'passengers';

const Passenger = sequelize.define(
  'Passenger',
  {
    dni: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    dateOfBirh: {
      type: Sequelize.DATE,
    },
  },
  { tableName },
);

Passenger.hasOne(Policy);

export default Passenger;
