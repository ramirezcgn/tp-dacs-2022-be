import Sequelize from 'sequelize';
import sequelize from '../config/database';
import Booking from './Booking';

const tableName = 'payments-plans';

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
  { tableName },
);

PaymentPlan.hasMany(Booking);
Booking.belongsTo(PaymentPlan);

export default PaymentPlan;
