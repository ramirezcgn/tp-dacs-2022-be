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
  { tableName },
);

const throughTableName = 'bookings_passengers';

const BookingPassenger = sequelize.define(
  'BookingPassenger',
  {},
  { timestamps: false, tableName: throughTableName },
);

Booking.hasMany(Payment);
Payment.belongsTo(Booking);

Booking.belongsToMany(Passenger, { through: BookingPassenger });
Passenger.belongsToMany(Booking, { through: BookingPassenger });

export default Booking;
