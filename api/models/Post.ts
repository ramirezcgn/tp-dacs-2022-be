import Sequelize from 'sequelize';
import bcryptService from '../services/bcrypt.service';

import sequelize from '../config/database';

const tableName = 'posts';

const Post = sequelize.define('Post', {
    id: {
        type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING,
    },
    date:{
        type: Sequelize.DATE
    },
    user_id:{
        type: Sequelize.INTEGER
    }
}, { tableName });

// eslint-disable-next-line
Post.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

export default Post;
