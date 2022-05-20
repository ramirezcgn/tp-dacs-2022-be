import Sequelize from 'sequelize';
import sequelize from '../config/database';



const tableName = 'shows';

const Shows = sequelize.define(
  'Shows',
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

export default Shows;
