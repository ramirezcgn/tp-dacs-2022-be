import Repository from './Repository';
import Post from '../models/Post';
import User from '../models/User';

export default class PostRepository implements Repository {
  get(id) {
    return Post.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Post.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return Post.create({
      ...data,
      user,
    }, {
      association: Post.User,
    });
  }

  update(id, data) {
    return Post.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Post.destroy({
      where: {
        id,
      },
    });
  }
}
