import Repository from './Repository';
import Post from '../models/Post';

export default class PostRepository implements Repository {
  get(id) {
    return Post.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Post.findAll();
  }

  create(data) {
    return Post.create(data);
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
