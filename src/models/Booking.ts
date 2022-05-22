import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Passenger from './Passenger';
import Payment from './Payment';

const tableName = 'bookings';

const Booking = sequelize.define(
  'Booking',
  {
    amount: {
      type: Sequelize.NUMBER,
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

Booking.hasMany(Payment);
Payment.belongsTo(Booking);

Booking.hasMany(Passenger);
Passenger.belongsTo(Booking);

export default Booking;
