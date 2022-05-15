import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'posts';

const Post = sequelize.define(
  'Post',
  {
    title: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
  },
  { tableName },
);

// eslint-disable-next-line
Post.prototype.toJSON = function () {
  const values = { ...this.get() };

  return values;
};

export default Post;
