import Repository from './Repository';
import User from '../models/User';

export default class UserRepository implements Repository {
  get(id) {
    return User.findByPk(id);
  }

  getByName(username) {
    return User.findOne({
      where: {
        username,
      },
    });
  }

  getByEmail(email) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return User.findAll();
  }

  async create(data) {
    return User.create(data);
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
