import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'accommodations';

const Accommodation = sequelize.define(
  'Accommodation',
  {
    externalId: {
      type: Sequelize.STRING,
      unique: true,
    },
    dtoDate: {
      type: Sequelize.DATE,
    },
    fromDate: {
      type: Sequelize.DATE,
    },
    image: {
      type: Sequelize.STRING,
    },
  },
  { tableName },
);

export default Accommodation;
