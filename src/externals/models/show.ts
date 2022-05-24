import Sequelize from 'sequelize';
import sequelize from '../../config/database';

const tableName = 'shows';

const Show = sequelize.define(
  'Show',
  {
    idService: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
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

export default Show;
