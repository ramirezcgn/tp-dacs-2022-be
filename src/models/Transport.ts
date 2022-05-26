import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'transports';

const Transport = sequelize.define(
  'Transport',
  {
    externalId: {
      type: Sequelize.STRING,
      unique: true,
    },
    date: {
      type: Sequelize.NUMBER,
    },
    origin: {
      type: Sequelize.STRING,
    },
    destination: {
      type: Sequelize.STRING,
    },
  },
  { tableName },
);

export default Transport;
