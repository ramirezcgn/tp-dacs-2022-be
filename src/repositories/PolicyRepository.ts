import Repository from './Repository';
import Policy from '../models/Policy';
import User from '../models/User';

export default class PolicyRepository implements Repository {
  get(id) {
    return Policy.findByPk(id);
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  getAll(page: number, limit: number) {
    return Policy.findAll();
  }

  create(data) {
    const user = User.findByPk(1);
    return Policy.create(
      {
        ...data,
        user,
      },
      {
        association: Policy.User,
      },
    );
  }

  update(id, data) {
    return Policy.update(data, {
      where: {
        id,
      },
    });
  }

  remove(id) {
    return Policy.destroy({
      where: {
        id,
      },
    });
  }
}
