import Sequelize from 'sequelize';
import sequelize from '../config/database';



const tableName = 'payment';

const Payment = sequelize.define(
  'Payment',
  {
    
    idBooking: {
      type: Sequelize.NUMBER,
      unique: true,

    },
    amount: {
      type: Sequelize.NUMBER,
      
    },
    date: {
      type: Sequelize.DATE,
    },
    
        
  },
  {  tableName },
);

export default Payment;