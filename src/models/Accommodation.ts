import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Booking from './Booking';

const tableName = 'accommodations';

const Accommodation = sequelize.define(
  'Accommodation',
  {
    idHotel: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    dtoDate: {
      type: Sequelize.DATE,
    },
    fromDate: {
      type: Sequelize.DATE,
    },
  },
  {  tableName },
);

Booking.hasMany(Accommodation);
Accommodation.belongsTo(Booking);

export default Accommodation;
