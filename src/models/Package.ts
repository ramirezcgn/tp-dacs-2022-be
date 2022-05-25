import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Booking from './Booking';
import Transport from './Transport';
import Accommodation from './Accommodation';
import Ticket from './Ticket';

const tableName = 'packages';

const Package = sequelize.define(
  'Package',
  {
    idPackage: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.NUMBER,
    },
    days: {
      type: Sequelize.NUMBER,
    },
    date: {
      type: Sequelize.DATE,
    },
    image: {
      type: Sequelize.STRING,
    },
  },
  { tableName },
);

Package.hasMany(Transport);
Transport.belongsTo(Package);

Package.hasMany(Booking);
Booking.belongsTo(Package);

Package.hasMany(Accommodation);
Accommodation.belongsTo(Package);

Package.hasMany(Ticket);
Ticket.belongsTo(Package);

export default Package;
