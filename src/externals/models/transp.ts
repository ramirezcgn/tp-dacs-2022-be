import Sequelize from 'sequelize';
import sequelize from '../../config/database';

const tableName = 'transps';

const Transp = sequelize.define(
  'Transp',
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
    type: {
      type: Sequelize.STRING,
    },
  },
  { tableName },
);

export default Transp;
