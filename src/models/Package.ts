import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Booking from './Booking';
import Transport from './Transport';
import Accommodation from './Accommodation';
import Ticket from './Ticket';
import Insurance from './Insurance';

const tableName = 'packages';

const Package = sequelize.define(
  'Package',
  {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    image: {
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
    validUntil: {
      type: Sequelize.DATE,
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

Insurance.hasMany(Package);
Package.belongsTo(Insurance);

Package.hasMany(Ticket);
Ticket.belongsTo(Package);

export default Package;
