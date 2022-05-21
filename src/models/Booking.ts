import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'bookings';

const Booking = sequelize.define(
  'Booking',
  {
    amount: {
      name: Sequelize.NUMBER,
    },
    fromDate: {
      type: Sequelize.DATE,
    },
    toDate: {
      type: Sequelize.DATE,
    },
  },
  {  tableName },
);

export default Booking;
