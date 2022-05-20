import Sequelize from 'sequelize';
import sequelize from '../config/database';



const tableName = 'transport';

const Transport = sequelize.define(
  'Transport',
  {
    idTransport: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    date: {
      type: Sequelize.NUMBER,
    },
    
   
    
  },
  {  tableName },
);

export default Transport;
