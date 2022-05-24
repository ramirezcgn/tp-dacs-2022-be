import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Booking from './Booking';
import Payment from './Payment';

const tableName = 'customers';

const Customer = sequelize.define(
  'Customer',
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

Customer.hasMany(Payment);
Payment.belongsTo(Customer);

Customer.hasMany(Booking);
Booking.belongsTo(Customer);

export default Customer;
