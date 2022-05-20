import Sequelize from 'sequelize';
import sequelize from '../config/database';



const tableName = 'policy';

const Policy = sequelize.define(
  'Policy',
  {
    idInsurance: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    idPolicy: {
        type: Sequelize.NUMBER,
        unique: true,
      },
    
  },
  {  tableName },
);





export default Policy;
