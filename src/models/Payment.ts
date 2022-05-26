import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'payments';

const Payment = sequelize.define(
  'Payment',
  {
    amount: {
      type: Sequelize.NUMBER,
    },
    date: {
      type: Sequelize.DATE,
    },
  },
  { tableName },
);

export default Payment;
