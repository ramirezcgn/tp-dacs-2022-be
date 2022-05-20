import Sequelize from 'sequelize';
import sequelize from '../config/database';



const tableName = 'paymentPlan';

const PaymentPlan = sequelize.define(
  'PaymentPlan',
  {
    
    idPlan: {
      type: Sequelize.NUMBER,
      unique: true,

    },
    couteTotal: {
      type: Sequelize.DATE,
    },
    
        
  },
  {  tableName },
);

export default PaymentPlan;