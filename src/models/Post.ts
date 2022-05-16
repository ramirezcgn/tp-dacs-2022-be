import Sequelize from 'sequelize';
import sequelize from '../config/database';
import User from './User';

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
  },
  { tableName },
);

User.hasMany(Post);
Post.belongsTo(User);

// eslint-disable-next-line
Post.prototype.toJSON = function () {
  const values = { ...this.get() };

  return values;
};

export default Post;
