import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'shows';

const Show = sequelize.define(
  'Show',
  {
    idTicket: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    date: {
      type: Sequelize.DATE,
    },
  },
  {  tableName },
);

export default Show;
