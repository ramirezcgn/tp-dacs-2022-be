import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Booking from './Booking';

const tableName = 'packages';

const Package = sequelize.define(
  'Package',
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
  { tableName },
);

Package.hasMany(Booking);
Booking.belongsTo(Package);

export default Package;
