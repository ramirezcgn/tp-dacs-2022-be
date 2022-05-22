import Repository from './Repository';
import User from '../models/User';

export default class UserRepository implements Repository {
  get(id) {
    return User.findByPk(id, { include: User });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return User.findAll({ include: User });
  }

  create(data) {
    const user = User.findByPk(1);
    return User.create(
      {
        ...data,
        user,
      },
      {
        association: User.User,
      },
    );
  }

  update(id, data) {
    return User.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return User.destroy({
      where: {
        id,
      },
    });
  }
}
