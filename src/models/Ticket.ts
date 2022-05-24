import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'tickets';

const Ticket = sequelize.define(
  'Ticket',
  {
    idTicket: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    date: {
      type: Sequelize.DATE,
    },
  },
  { tableName },
);

export default Ticket;
