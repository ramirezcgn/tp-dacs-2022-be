import Sequelize from 'sequelize';
import sequelize from '../config/database';

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

export default Accommodation;
